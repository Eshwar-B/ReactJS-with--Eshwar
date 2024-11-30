import styles from "./product-item.module.css";

function ProductItem({ singleProductItem }) {
    return (
        <div style={{ border: "2px solid blue", padding: "18px", marginBottom: "5px" }}>
            <p>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    );
}

function ButtonComponent() {
    return (
        <p className={styles.buttonStyle}>Click</p>  
    );
}

export default ProductItem;
