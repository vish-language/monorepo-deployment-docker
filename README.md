# monorepo-deployment-docker

This repository is a minimal monorepo that deploys services in Docker containers to a virtual machine.

## Monorepo structure

- `apps/api` - API service
- `apps/web` - Web service
- `docker-compose.yml` - Local/VM service orchestration
- `deploy/deploy-vm.sh` - SSH deploy script for VM
- `.github/workflows/deploy.yml` - CI/CD workflow to build images and deploy

## Run locally with Docker

```bash
docker compose up --build -d
```

Services:

- API: `http://localhost:3000`
- Web: `http://localhost:3001`

## Deploy to virtual machine

1. Copy this repository to your VM at a path like `/opt/monorepo-deployment-docker`.
2. Ensure Docker + Docker Compose are installed on the VM.
3. Configure repository secrets:
   - `DEPLOY_HOST`
   - `DEPLOY_USER`
   - `DEPLOY_SSH_KEY`
   - `DEPLOY_PATH`
4. Push to `main` (or run `workflow_dispatch`) to trigger `.github/workflows/deploy.yml`.

The deploy job pulls the latest pushed images and restarts containers with `docker compose up -d --remove-orphans`.
