import styles from "./user.module.scss";
import { useGlobalContext } from "../../store/globalContext";
import { tabs } from "../../utils/utils";

const Header = () => {
  const { state, setState } = useGlobalContext();

  return (
    <section className={styles.tab}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          style={{
            background:
              state.tab === tab.value
                ? "var(--secondary-background-color)"
                : "white",
            color: state.tab === tab.value ? "var(--main-font-color)" : "black",
          }}
          onClick={() => setState({ ...state, tab: tab.value })}
        >
          {tab.name}
        </button>
      ))}
    </section>
  );
};

export default Header;
