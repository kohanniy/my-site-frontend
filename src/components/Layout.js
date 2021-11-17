import Nav from './Nav/Nav';

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
);

export default Layout;
