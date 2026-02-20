# Mon Application de Test

Application web simple en HTML/CSS/JavaScript conteneurisée avec Nginx.

## 🚀 Fonctionnalités

- ✅ Interface utilisateur simple et moderne
- ✅ Validation de formulaire
- ✅ Servie par Nginx
- ✅ Dockerisée (~40MB)
- ✅ Prête pour Kubernetes

## 📦 Structure
```
.
├── index.html          # Page principale
├── style.css           # Styles CSS
├── script.js           # Logique JavaScript
├── nginx.conf          # Configuration Nginx
├── Dockerfile          # Image Docker
└── README.md           # Documentation
```

## 🐳 Docker

### Build
```bash
docker build -t mon-app:1.0 .
```

### Run
```bash
docker run -d -p 8080:80 --name mon-app mon-app:1.0
```

### Test
Ouvrir : http://localhost:8080

## ☸️ Kubernetes

Manifests disponibles dans `kubernetes/`
```bash
kubectl apply -f kubernetes/
```

## 🔒 Sécurité

- ✅ Nginx Alpine léger
- ✅ Headers de sécurité configurés
- ✅ Health checks
- ✅ Gzip compression activée

## 📝 License

MIT