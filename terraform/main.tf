// 変数を定義します。terraform.tfvarsで値を設定している場合はそちらが優先されます。
variable "app_name" {
  type    = string
  default = "fargate_terraform_example"
}

variable "app_env" {
  type    = string
  default = "dev"
}

variable "aws_profile" {
   type    = string
  default = "geoint"
}
variable "aws_default_region" {
   type    = string
  default = "ap-northeast-1"
}
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
provider "aws" {
  profile = "${var.aws_profile}"
  region  = "${var.aws_default_region}"
}

data "aws_caller_identity" "current" {}