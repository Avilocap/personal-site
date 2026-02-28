---
title: "Cómo estamos construyendo en Zinkee con agentes (y por qué ahora entregamos x10)"
date: "2026-02-28"
summary: "Así ha cambiado nuestro flujo en Zinkee: de un deploy cada dos días a 5-6 deploys diarios, con agentes en desarrollo y review."
tags: ["ia", "agentes", "engineering", "zinkee", "build-in-public"]
draft: false
---

Durante años, construir software seguía una secuencia bastante predecible: requisito, desarrollo, review y deploy. En Zinkee ese marco sigue existiendo, pero lo que ha cambiado por completo es cómo ejecutamos cada paso y dónde ponemos el valor humano.

En poco tiempo hemos pasado de hacer aproximadamente **un deploy cada dos días** a movernos en **cinco o seis deploys diarios**. No ha sido por acelerar sin control ni por “automatizar por automatizar”. Ha sido por rediseñar el sistema de trabajo.

Todo empieza en Growth. El equipo detecta una necesidad real del producto, normalmente a través de entrevistas con clientes, experimentos y señales de uso, y lo convierte en un PRD. A partir de ahí, se prioriza y entra en ingeniería.

Un ejemplo reciente es el trabajo del motor de integraciones:
<https://linear.app/zinkee/issue/Z2N-307/integration-engine-mvp-http-service>

(El contexto de PRD también venía bien definido en iniciativas como esta:
<https://linear.app/zinkee/issue/Z2DND-3554/settings-para-plugins>).

Donde más hemos notado el cambio es en lo que hacemos **antes** de programar. Hemos interiorizado que, si no hay una fase seria de research y planificación, el resultado cae muchísimo. Cuando ese trabajo previo está bien hecho, los agentes producen código que encaja mejor en la arquitectura y requiere menos correcciones posteriores. Estamos aplicando un enfoque muy alineado con este artículo de referencia:
<https://boristane.com/blog/how-i-use-claude-code/#phase-1-research>.

A nivel operativo, los repositorios están preparados con `AGENTS.md` y skills específicas, y eso reduce fricción. Los agentes generan implementación y PR; después entran pipelines de calidad (tests, type checks y validaciones adicionales) y una capa de review con distintos agentes. Según el tipo de cambio, mantenemos más o menos validación humana, pero el principio es el mismo: no se trata de confiar ciegamente, sino de diseñar un proceso que fuerce calidad.

El caso del motor de integraciones fue especialmente ilustrativo: en dos días tuvimos desde cero las fases 1 y 2, incluyendo arquitectura, despliegue, pruebas y puesta en producción; y la fase 5 (webhooks) se cerró en un día. Además, en paralelo al flujo principal, estamos pudiendo resolver varios bugs y mejoras menores cada jornada.

También hemos cometido errores. El principal: arrancar ejecución sin definir bien el problema. Cuando el requisito es ambiguo, los agentes amplifican esa ambigüedad y entregan resultados mediocres. Otro patrón que hemos visto es el exceso de boilerplate: el código no necesariamente está mal, pero muchas veces es más de lo necesario. Por eso insistimos tanto en simplicidad, foco y validación continua en cada iteración.

Si tuviera que resumir el aprendizaje más importante, sería este: el cambio no va de “dejar de necesitar ingenieros”, va de elevar el tipo de trabajo del ingeniero. Cada vez menos picar código por inercia y cada vez más pensar arquitectura, contexto, restricciones y criterios de calidad. Los agentes no sustituyen ese criterio; lo multiplican.

Seguiré compartiendo cómo lo estamos haciendo en Zinkee, con lo que nos funciona y también con lo que no.
