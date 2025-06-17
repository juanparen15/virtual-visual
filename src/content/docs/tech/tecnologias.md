---
title: Tecnologías utilizadas
description: Tecnologías y herramientas utilizadas en el desarrollo del sistema.
---

Este sistema fue construido utilizando una pila tecnológica moderna que combina la robustez de Laravel con la facilidad de gestión que ofrece Voyager. A continuación se describen las principales tecnologías y herramientas empleadas.

## Backend

- **Laravel 10.x**  
  Framework PHP moderno y robusto que facilita el desarrollo basado en MVC, ofrece herramientas para autenticación, rutas, migraciones, validaciones y más.

- **Voyager Admin Panel**  
  Panel de administración para Laravel que permite generar interfaces administrativas sin codificación adicional, usando la estructura BREAD (Browse, Read, Edit, Add, Delete).

- **MySQL**  
  Sistema de gestión de bases de datos relacional utilizado para almacenar la información catastral, usuarios, roles, reclamos y trazabilidad.

- **Eloquent ORM**  
  ORM nativo de Laravel para interactuar con la base de datos de forma orientada a objetos.

## Frontend

- **Blade**  
  Motor de plantillas de Laravel usado para construir las vistas públicas (consultas, presentación de reclamos, visualización de resultados).

- **Bootstrap 5 (personalizado)**  
  Framework CSS utilizado para el diseño responsivo y los componentes visuales del sistema.

## Otras herramientas

- **Laravel Voyager BREAD Builder**  
  Permite definir visualmente modelos de datos, relaciones, formularios y vistas administrativas sin codificar.

- **Laravel File Storage**  
  Para la gestión de documentos adjuntos como soportes de reclamos.

- **Laravel Notifications y Mail**  
  Para envío de correos automáticos a usuarios y notificaciones del sistema.

## Entorno de desarrollo

- **PHP 8.x**
- **Composer**
- **Voyager**
- **NPM**
- **Visual Studio Code / Laragon**

## Seguridad y control de acceso

- Roles y permisos definidos con Voyager.
- Middleware de autenticación de Laravel.
- CSRF tokens automáticos para formularios.

---