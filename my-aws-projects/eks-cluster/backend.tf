terraform {
	backend "s3" {
		bucket	= "tonkung-terraform-state-2026"
		key	= "eks/terraform.tfstate"
		region	= "ap-southeast-1"
		encrypt	= true
		dynamodb_table	= "terraform-lock-table"
	}
}
