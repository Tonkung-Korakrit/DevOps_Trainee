# ตั้งค่า provider
provider "aws" {
  region = "ap-southeast-1"
}

# สั่งให้สร้าง S3 Bucket
# resource "aws_s3_bucket" "my_test_bucket" {
  # ชื่อ bucket ต้องไม่ซ้ำกับใครในโลกด้วย
  # bucket = "tonkung-devops-bucket-2026-test"

  # tags = {
  #  Name	= "My first bucket"
  #  Environment = "Dev"
  #}
#}

# สร้าง Security Group (Firewall)
resource "aws_security_group" "web_access" {
  name		= "allow_web_and_ssh"
  description	= "Allow SSH and HTTP inbound traffic"

  #  port 22 สำหรับ SSH (ให้เราเข้าไปคุมเครื่องได้)
  ingress {
	from_port	= 22
	to_port		= 22
	protocol	= "tcp"
	cidr_blocks	= ["0.0.0.0/0"]
  }

  # เปิด port 80 สำหรับ Web (ให้คนเข้าเว็บเราได้)
  ingress {
	from_port	= 80
	to_port		= 80
	protocol	= "tcp"
	cidr_blocks	= ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # ขาออก (Egress) เปิดให้เครื่องออกเน็ตได้ทุกอย่าง
  egress {
	from_port	= 0
	to_port		= 0
	protocol	= "-1"
	cidr_blocks	= ["0.0.0.0/0"]
  }
}

# สร้าง AMI ให้อิงตาม version ล่าสุดของ ubuntu
data "aws_ami" "ubuntu" {
  most_recent	= true
  owners	= ["099720109477"] # ID ของผู้สร้าง Ubuntu (Canonical)

  filter {
	name = "name"
	values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
	name = "virtualization-type"
	values = ["hvm"]
  }
}

# add key to AWS server
resource "aws_key_pair" "deployer" {
  key_name	= "ton-key"
  public_key	= file("~/.ssh/ton-aws-key.pub")
}

# สร้าง EC2 Instance
resource "aws_instance" "devops_server" {
  # ami		= "ami-0df7a207adb894a1f" # Ubuntu 22.04 LTS in singapore
  ami = data.aws_ami.ubuntu.id
  instance_type	= "t3.micro"

  key_name	= aws_key_pair.deployer.key_name

  # ผูกกับ Security Group ที่เพิ่งสร้างไว้ข้างบน
  vpc_security_group_ids = [aws_security_group.web_access.id]

  # User Data (script รันตอนเปิดเครื่องครั้งแรก)
  user_data = <<-EOF
	      #!/bin/bash
	      sudo apt-get update
	      sudo apt-get install -y docker.io
              sudo systemctl start docker
	      sudo systemctl enable docker
	      sudo usermod -aG docker ubuntu
	      EOF

  tags = {
	Name = "Ton-Docker-Server"
  }
}

# สั่งให้พ่น Ip ออกมาเมื่อสร้างเสร็จ
output "server_public_ip" {
  value = aws_instance.devops_server.public_ip
}
