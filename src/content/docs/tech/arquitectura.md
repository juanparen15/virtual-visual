---
title: Arquitectura del sistema
description: Descripción general de la arquitectura del sistema de consulta catastral y reclamos prediales construido con Laravel Voyager.
---

El sistema fue desarrollado con el framework **Laravel Jetstream** y el panel administrativo **Voyager**, lo que permitió una rápida construcción de funcionalidades administrativas y una interfaz flexible para la gestión de usuarios, contenido y datos catastrales.

## Arquitectura general

El proyecto sigue la arquitectura **MVC (Modelo-Vista-Controlador)** de Laravel, complementado con las herramientas y componentes que provee **Voyager**.

### Componentes principales

- **Frontend público**:
  - Vistas personalizadas creadas con Blade (Laravel).
  - Formularios de búsqueda catastral y reclamos.

- **Backend administrativo (Voyager)**:
  - Módulo de administración de usuarios, roles y permisos.
  - Gestión de reclamos, predios y configuración del sistema.
  - Creación y personalización de tablas y relaciones vía BREAD (Browse, Read, Edit, Add, Delete).

- **Base de datos**:
  - MySQL, con tablas para usuarios, roles, predios, reclamos, trazabilidad, etc.
  - Migraciones y seeds para instalación rápida en otros entornos.

- **Autenticación**:
  - Voyager usa el sistema de autenticación de Laravel.
  - Roles predefinidos como `admin`, `funcionario` y `ciudadano` (si aplica).

- **Seguridad**:
  - Autenticación y autorización manejadas por Voyager (basado en Laravel Gates/Policies).
  - CSRF tokens para formularios.
  - Protección de rutas con middleware.

- **Módulos personalizados**:
- ***Aunque Voyager ofrece un panel genérico, se desarrollaron funcionalidades específicas como:***
  - Módulo de reclamos prediales con historial y adjuntos.
  - Filtros para búsqueda avanzada de predios.
  - Envío automático de correos.

## Diagrama de flujo de una consulta catastral

```text
Usuario ciudadano
    ↓
Formulario de búsqueda (número predial o datos básicos)
    ↓
Controlador de consulta
    ↓
Modelo de predios
    ↓
Base de datos
    ↓
Vista con resultados y mapa interactivo
