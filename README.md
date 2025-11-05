# Django Helper

**Django Helper** is a Visual Studio Code extension designed to speed up Django development by providing smart code utilities and automatic template enhancements.

---

## 🚀 Features

- 🧩 **Auto Wrap Static Files:**  
  Automatically wraps all local file paths in `{% static %}` tags inside Django templates.  
  Example:
  ```html
  <link rel="stylesheet" href="css/style.css" />
  ```

```html
<link rel="stylesheet" href="{% static 'css/style.css' %}" />
```

- ⚙️ **Auto Load Static Tag:**
  Adds `{% load static %}` at the top of templates if it’s missing.

- 🪄 **Supports Multiple File Types:**
  Works with `<link>`, `<script>`, `<img>`, `<audio>`, and `<video>` tags.

- 🧠 **Smart Replacement Logic:**
  Prevents duplicate replacements (avoids re-wrapping already static-tagged paths).

---

## 💡 How to Use

1. Open any Django HTML template file.
2. Press **Ctrl+Shift+P** (or **Cmd+Shift+P** on macOS).
3. Run:

   ```
   Django Helper: Insert Static URLs
   ```

4. All relative file paths will be automatically wrapped in `{% static %}` tags.

---

## 🛠️ Installation

### From VSIX

1. Run the following command in the terminal:

   ```bash
   code --install-extension django-helper-1.0.0.vsix
   ```

2. Reload VS Code.

### From Marketplace (coming soon)

Search for **“Django Helper”** in the VS Code Extensions panel.

---

## 🧰 Requirements

- Visual Studio Code **v1.90.0+**
- Django project templates (`.html` files)

---

## 👨‍💻 Author

**AZIKDEV**
Built with ❤️ for Django developers.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and contribute.

---
