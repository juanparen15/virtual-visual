---
title: Estructura de la base de datos
description: Modelo relacional y descripción de las tablas utilizadas en el sistema.
---

El sistema implementa una base de datos relacional en **MySQL**, estructurada para gestionar la información catastral del municipio de **Puerto Boyacá**, así como los procesos de presentación de reclamos, trazabilidad de solicitudes, autenticación de usuarios y control de acceso.

Está optimizada para integrarse con el **panel administrativo de Voyager**, permitiendo una gestión ágil de la información a través de interfaces ya configuradas mediante `BREAD`.

## Objetivos del modelo de datos

- Representar de forma estructurada los **predios** catastrales registrados.
- Registrar y gestionar los **reclamos** realizados por los ciudadanos.
- Hacer seguimiento a la atención de reclamos mediante la **trazabilidad**.
- Gestionar usuarios, permisos y roles a través del sistema integrado de **Voyager**.

## Diagrama conceptual

```text
Usuarios ─┬─┬► Reclamos ◄──── Predios
          │ └► Trazabilidad
          └► Roles (Voyager)
```

## Diagrama entidad-relación

El siguiente diagrama muestra las relaciones entre las tablas principales del sistema:

![Diagrama ER del sistema](/images/diagrama-er.png)

---
