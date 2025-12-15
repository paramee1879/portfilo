const Footer = ({ userData }) => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8 border-t border-gray-800">
      <p>&copy; 2024 {userData?.name || 'Your Portfolio'}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;