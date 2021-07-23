export const Wrapper: React.FC = ({ children }) => (
  <>
    <section
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {children}
    </section>
  </>
);
