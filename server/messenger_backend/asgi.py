"""
ASGI config for messenger_backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "messenger_backend.settings")

application = get_asgi_application()
=======
"""
ASGI config for messenger_backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "messenger_backend.settings")

application = get_asgi_application()
>>>>>>> aac961c9dde0f2b1c1be0a2dd8303237ef1a7760
