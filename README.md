# Kids' Wonderland 🧸✨

A delightful interactive toy store built with React, TypeScript, and Tailwind CSS. Kids' Wonderland offers a colorful, playful shopping experience for children's toys, books, and science kits.

![Kids' Wonderland](https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

## 🌟 Features

- **Intuitive Navigation**: Easy-to-use interface designed for both kids and parents
- **Product Categories**: Browse by toys, books, and science kits
- **Featured Products**: Discover our most popular items
- **Shopping Cart**: Add items and proceed to checkout
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🚀 Technologies Used

- **Frontend**: React, TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/kids-wonderland.git
   cd kids-wonderland
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Screenshots

### Home Page
![Home Page](https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80)

### Product Page
![Product Page](https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80)

## 🏗️ Project Structure

```
kids-wonderland/
├── public/
├── src/
│   ├── components/
│   │   ├── Cart.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── CategorySection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── ProductCard.tsx
│   ├── data/
│   │   ├── categories.ts
│   │   └── products.ts
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── CategoriesPage.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── FeaturedPage.tsx
│   │   ├── HomePage.tsx
│   │   └── ProductPage.tsx
│   ├── store/
│   │   ├── cartSlice.ts
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .eslintrc.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🔄 State Management

The application uses Redux Toolkit for state management. The cart functionality is implemented using a Redux slice that handles adding, removing, and updating items in the cart.

## 🎨 Styling

Tailwind CSS is used for styling the application. The design is colorful and playful, appealing to children while remaining functional and intuitive for parents.

## 🚧 Future Improvements

- User authentication
- Wishlist functionality
- Product reviews and ratings
- Advanced filtering and search
- Payment integration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- Your Name - Initial work - [YourGitHubUsername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide React](https://lucide.dev/)
