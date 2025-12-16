const BackgroundImage = ({ children }) => {
  return (
    <div
      className="relative w-full bg-center bg-cover bg-no-repeat py-20"
      style={{
        backgroundImage:

          "url('https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1920')",
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
