output "production_dns_entries" {
  value = concat([
    {
      record_type  = module.production.acm_certificate_domain_validation_options[0].resource_record_type
      record_name  = module.production.acm_certificate_domain_validation_options[0].resource_record_name
      record_value = module.production.acm_certificate_domain_validation_options[0].resource_record_value
    },
    {
      record_type  = "CNAME"
      record_name  = var.production_domain
      record_value = module.production.beanstalk_environment_cname
    }
  ])
}
