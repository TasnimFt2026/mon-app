# 🚀 MON-APP

## 📋 Description

MON-APP est une plateforme de déploiement automatisé basée sur GitOps.

L'application est conteneurisée avec Docker, déployée sur un cluster Kubernetes K3s et synchronisée automatiquement avec Argo CD.

---

## 🛠 Technologies utilisées

- Git & GitHub
- GitHub Actions
- Docker
- GitHub Container Registry (GHCR)
- Kubernetes K3s
- Argo CD
- Linkerd
- Trivy
- Prometheus
- Grafana

---

## 🏗 Architecture

```text
Developer
    │
    ▼
GitHub
    │
    ▼
GitHub Actions
(Build + Scan + Push)
    │
    ▼
GHCR
    │
    ▼
Argo CD
    │
    ▼
K3s Cluster
```

---

## 🔄 Déploiement

Après chaque modification :

```bash
git add .
git commit -m "update application"
git push origin main
```

Le pipeline GitHub Actions :

- Construit l'image Docker
- Analyse les vulnérabilités avec Trivy
- Publie l'image dans GHCR
- Met à jour les manifests Kubernetes

Argo CD détecte automatiquement les changements et synchronise le cluster.

---

## 🔒 Sécurité

- Linkerd mTLS
- Network Policies
- Sealed Secrets
- Scan de vulnérabilités avec Trivy

---

## 📊 Monitoring

- Prometheus
- Grafana

---

## ↩️ Rollback

```bash
git revert <commit-id>
git push origin main
```

Le pipeline est relancé automatiquement et Argo CD restaure la version précédente.

---

## ✅ Résultats

- Déploiement automatisé
- Synchronisation GitOps
- Sécurité renforcée
- Monitoring en temps réel
- Rollback rapide