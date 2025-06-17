---
title: Instalación y despliegue
description: Pasos para instalar y configurar el sistema de consulta catastral en entornos locales o productivos.
---

Este sistema fue desarrollado en **Laravel** con el panel administrativo **Voyager**. A continuación se describen los pasos necesarios para instalarlo y ponerlo en funcionamiento.

## Requisitos del sistema

- PHP >= 8.1
- Composer >= 2.x
- MySQL o MariaDB
- Laravel 10
- Extensiones de PHP: `mbstring`, `openssl`, `pdo`, `tokenizer`, `xml`, `fileinfo`, `gd`, `zip`
- Servidor web: Apache o Nginx
- Sistema operativo: Linux (recomendado) o Windows con Laragon

## Clonación del repositorio

```bash
git clone https://github.com/juanparen15/IGAC-HACIENDA.git
```
```bash
cd IGAC-HACIENDA
```

## Configuración de entorno

 Edita el archivo .env y actualiza las siguientes variables:
 ```
 DB_DATABASE=nombre_de_base_datos
 DB_USERNAME=usuario
 DB_PASSWORD=contraseña
 ```
Ejecuta los siguientes comandos en la terminal dentro del proyecto:

```bash
php artisan key:generate
php artisan storage:link
```

### 🔄 Si no crea el enlace simbólico debe volver a crear el Storage Link en Laravel

Si el comando `php artisan storage:link` falla o necesitas recrear el enlace simbólico, puedes seguir estos pasos para **borrar** y **volver a crear** el *storage link* correctamente.

---

### 🧹 1. Eliminar el enlace simbólico existente y recrearlo

En la raíz del proyecto Laravel, ejecuta en la terminal:

```bash
rm public/storage
php artisan storage:link
```

## Recomendaciones de producción

Configura correctamente los permisos de carpetas (`storage`, `bootstrap/cache`)

En un servidor Linux, puedes usar los siguientes comandos:

```bash
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache
```
**⚠️ Reemplaza www-data con el usuario de tu servidor web si estás usando otro (por ejemplo, apache en CentOS o Rocky Linux).**

Usa `php artisan config:cache` y `php artisan route:cache` o `php artisan optimize:clear` en entornos productivos

Implementa copias de seguridad automáticas

Desactiva `APP_DEBUG` en producción (`APP_DEBUG=false`)
