variable "aws_region" {
  type        = string
  description = "AWS region"
  default     = "ap-northeast-2"
}

variable "allowed_account_id" {
  type        = string
  description = "AWS account id"
}

variable "project_name" {
  type        = string
  description = "Short name of the project, will be used to prefix created resources"
}

variable "repo_name" {
  type        = string
  description = "Name of the Github repository where the code is hosted"
}

#
# Elastic Beanstalk configuration
# concepts: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html
#
variable "beanstalk_platform" {
  type        = string
  description = "The Elastic Beanstalk platform to use. This needs to be a Docker platform (Linux, not ECS). If upgrade is available please ensure the EC2 AMI and deployment strategy is compatible. https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html#platforms-supported.docker"
  default     = "64bit Amazon Linux 2 v3.6.0 running Docker"
}

variable "beanstalk_tier" {
  type        = string
  description = "The Elastic Beanstalk tier to use. This needs to be WebServer"
  default     = "WebServer"
}

variable "sendgrid_api_key_subscription" {
  type        = string
  description = "Sendgrid api key"
}

variable "ga_tracking_id" {
  type        = string
  description = "Google Analytics tracking id"
}

# Production configuration
variable "production_domain" {
  type = string
}

variable "production_ec2_instance_type" {
  type        = string
  description = "The type of EC2 instance to launch on the production environment"
}

variable "production_rds_backup_retention_period" {
  type        = number
  description = "Time in days to keep production db backups"
}
