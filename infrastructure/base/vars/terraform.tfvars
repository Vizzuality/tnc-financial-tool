aws_region         = "eu-west-3"
allowed_account_id = "375236790310"
project_name       = "tnc-financial-tool"
repo_name          = "tnc-financial-tool"

production_domain                      = "fundingncs.naturebase.org"
production_ec2_instance_type           = "m5a.large"
production_rds_backup_retention_period = 7

beanstalk_platform = "64bit Amazon Linux 2023 v4.0.1 running Docker"
beanstalk_tier     = "WebServer"
