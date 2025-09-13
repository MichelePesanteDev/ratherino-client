function Container({ backgroundColor, textColor, value, setValue, disabled }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      className="h-100 d-flex align-items-center justify-content-center p-3 rounded-3"
      style={{
        background: backgroundColor,
        color: textColor,
      }}
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Scrivi qui..."
        style={{
          border: "none",
          outline: "none",
          padding: "10px 15px",
          borderRadius: "10px",
          fontSize: "1.2rem",
          width: "100%",
          maxWidth: "400px",
        }}
        disabled={disabled}
      />
    </div>
  );
}

export default Container;
