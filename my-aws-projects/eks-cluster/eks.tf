module "eks" {
	source		= "terraform-aws-modules/eks/aws"
	version		= "~> 20.0"

	cluster_name	= "tonkung-eks-cluster-v2"
	cluster_version	= "1.31"
	
	enable_cluster_creator_admin_permissions = true
	
	cluster_endpoint_public_access = true

	vpc_id		= module.vpc.vpc_id
	subnet_ids	= module.vpc.private_subnets

	eks_managed_node_groups = {
		portfolio_node	= {
			instance_types	= ["t3.small"]
			min_size	= 1
			max_size	= 2
			desired_size	= 1

			iam_role_additional_policies= {
				AmazonSSMManagedInstanceCore = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
			}
		}
	}
}
