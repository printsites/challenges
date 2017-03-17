# CRUD App - PHP - Symfony

## Setup

If you already have a dev environment (server, database, etc) you are comfortable with, go ahead and use that.
If not, we suggest setting up and using [Vagrant](https://www.vagrantup.com/) with [Homestead](https://laravel.com/docs/5.4/homestead).

Here are the high-level things you will need to do:
- Install a VM tool. We use [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- Install [Vagrant](https://www.vagrantup.com/)
- Install the Homestead Vagrant box
```bash
vagrant box add laravel/homestead
```
- Clone Homestead to your working directory
```bash
git clone https://github.com/laravel/homestead.git Homestead
```
- Checkout the latest stable version of Homestead
```bash
cd Homestead
git checkout v5.1.0
```
- After you have those requirements installed, you'll need to do some configuration. Follow the instructions below.
  - [Homestead Installation](https://laravel.com/docs/5.4/homestead#installation-and-setup)
  - [Using Symfony with Homestead/Vagrant](https://symfony.com/doc/current/setup/homestead.html)

## The Challenge

Starting with [Symfony Standard Edition](https://github.com/symfony/symfony-standard), 
develop a CRUD app that will allow you to work with Drivers and Cars.

**Follow these specs:**
- Use Doctrine to work with the Driver and Car entities.
- Use a few different examples of property types on Drivers and Cars. (name: text, age: int, bio: long text, etc) 
- Drivers will have 0 or more Cars associated to them.
- There will only be one Driver per Car.
- If you delete a Driver, all associated Cars should also be deleted.
- Use JSON response types.
- GUI is not required, can be API only.

**Bonus Section** (these things aren't required, but bonus points for tackling one or more of them!)
- Add authentication/firewall to the app.
- Create a Symfony Command to display/work with the Driver/Car data.
- Setup Unit Tests.
- Setup Functional Tests.
