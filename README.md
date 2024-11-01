# NGINX Web Server with SSL on AWS EC2

This repository provides a step-by-step guide to set up an NGINX web server with SSL on an AWS EC2 instance, ensuring secure HTTP access for your application.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup Guide](#setup-guide)
  - [1. Configuring the Linux Environment](#1-configuring-the-linux-environment)
  - [2. Setting Up an EC2 Instance](#2-setting-up-an-ec2-instance)
  - [3. Installing and Configuring NGINX](#3-installing-and-configuring-nginx)
  - [4. Securing the Server with SSL](#4-securing-the-server-with-ssl)
  - [5. Optional: Enhancing Security with Cloudflare](#5-optional-enhancing-security-with-cloudflare)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This guide helps you configure an NGINX web server on AWS EC2 with SSL support to secure HTTP traffic. It includes instructions for setting up a Linux environment and managing configurations for NGINX and SSL certificates.

## Prerequisites

- An AWS account
- Basic knowledge of Linux command line
- A domain name (optional, but recommended for SSL)

## Setup Guide

### 1. Configuring the Linux Environment

- Use **Windows Subsystem for Linux (WSL)** or **VirtualBox** to set up a Linux environment.

### 2. Setting Up an EC2 Instance

- Launch an EC2 instance in your AWS account.
- Select an Amazon Machine Image (AMI) and instance type.
- Configure security groups to allow HTTP (port 80) and HTTPS (port 443) traffic.

### 3. Installing and Configuring NGINX

- SSH into your EC2 instance.
- Install NGINX using your package manager.
- Configure NGINX to serve your application.

### 4. Securing the Server with SSL

- Install Certbot for Let's Encrypt.
- Obtain and install SSL certificates for your domain.

### 5. Optional: Enhancing Security with Cloudflare

- Set up a Cloudflare account.
- Configure your DNS settings to use Cloudflare for additional security.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.

