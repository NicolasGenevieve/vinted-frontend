import "../../Publish/Publish.css";

const PublishInput = ({ optionTitle, type, placeholder, value, onChange }) => {
  return (
    <div className="inputWrap">
      <h2 className="productInfo">{optionTitle}</h2>
      <input
        className="inputPublish"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PublishInput;
