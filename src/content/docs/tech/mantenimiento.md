---
title: Mantenimiento del sistema
description: Tareas de mantenimiento preventivo y correctivo para el sistema de consulta catastral.
lang: es
---

Esta sección describe las tareas de mantenimiento recomendadas para el correcto funcionamiento y evolución del sistema.

## Copias de seguridad

- Realiza backups automáticos diarios o semanales de:
  - Base de datos
  - Carpeta `storage/app/public` (archivos subidos)
- Herramientas sugeridas: `mysqldump`, `rclone`, o soluciones como Laravel Backup.

## Actualizaciones del sistema

- Verificar actualizaciones de Laravel y Voyager.
- Para aplicar parches o mejoras:

  ```bash
  git pull origin main
  composer install --no-dev
  php artisan migrate --force
  npm run build
  ```

⚠️ Haz pruebas previas en un entorno de staging antes de aplicarlas en producción.

## Limpieza de archivos temporales

 Ejecutar periódicamente:
```bash
    php artisan config:clear
    php artisan route:clear
    php artisan view:clear
    php artisan cache:clear
    php artisan optimize:clear
```

## Monitoreo y logs
- Verifica el archivo de logs en: `storage/logs/laravel.log`
- Puedes integrar herramientas como `Sentry` o `LogRocket` si necesitas monitoreo en producción.

## Seguridad
- Cambiar contraseñas de administradores regularmente.
- Desactivar `APP_DEBUG` en `.env` `(APP_DEBUG=false)`.

## Usuarios y permisos
- Revisa periódicamente los roles y accesos desde el panel de Voyager.

- Elimina usuarios inactivos o sospechosos.