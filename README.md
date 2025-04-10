# Hopes Form (Free Edition)

**Hopes Form** is a lightweight, embeddable JavaScript form engine that dynamically renders UI components from JSON schemas.  
This free edition powers the public form builder of [Hopes-Studio](https://www.expert-solutions.fr/hopes-studio/) and is ideal for quick integrations, prototyping tools, and PLG-style SaaS frontends.

---

## ✨ Features

- ⚡ Light-dependency and framework-agnostic
- 🧩 JSON schema-based dynamic form rendering
- 🎨 Bootstrap 5-compatible layout
- 🧠 Compatible with Hopes-Language (H-L) parameters
- 📤 Built-in data change tracking
- 🔌 `onload` and `onchange` handler support
- 📦 Supports both functional and object-oriented APIs

---

## 🚀 Getting Started

### Installation

```bash
npm install hopes-form
```

Or via CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/expert-solutions-clariprint/hopes-form/dist/hopesform.umd.js"></script>

```

---

## 📄 Basic Usage (with `HForm.render()`)

```html
<div id="form-container"></div>

<script>
  const schema = {
    title: "User Settings",
    fields: [
      { name: "username", label: "Username", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "notifications", label: "Enable notifications", type: "checkbox" }
    ]
  };

  HForm.render("#form-container", schema, {
    onload: (instance) => {
      console.log("Form ready:", instance);
    },
    onchange: (data) => {
      console.log("Form data changed:", data);
    }
  });
</script>
```

---

## 🛠️ Advanced Usage (Class-based)

If you want more control, you can instantiate `HForm` manually:

```html
<div id="form-container"></div>

<script>
  const schema = {
    title: "Preferences",
    fields: [
      { name: "theme", label: "Theme", type: "select", options: ["Light", "Dark"] },
      { name: "emailUpdates", label: "Receive updates", type: "checkbox" }
    ]
  };

  const hf = new HForm("#form-container", schema, {
    onload: (instance) => {
      console.log("Loaded form instance:", instance);
    },
    onchange: (data) => {
      console.log("Data changed:", data);
    }
  });

  hf.display();
</script>
```

---

## 🧪 Playground

Try it online avaolable soon at:  
👉 [playground on codepen](https://codepen.io/pen?template=qEBzPaM)


---

## 📄 License

This module is distributed under the **MIT License**.  
For commercial usage or premium features, please contact [contact@expert-solutions.fr](mailto:contact@expert-solutions.fr).

---

## 💬 Feedback & Contributions

Contributions are welcome!  
Feel free to open issues, suggest improvements, or fork and build upon this module.

Made with ❤️ by the [Expert-solutions](https://www.expert-solutions.fr) team.

---

## 🔗 Repository & Issue Tracker

GitHub: [https://github.com/expert-solutions-clariprint/hopes-form](https://github.com/expert-solutions-clariprint/hopes-form)  
Issues: [https://github.com/expert-solutions-clariprint/hopes-form/issues](https://github.com/expert-solutions-clariprint/hopes-form/issues)