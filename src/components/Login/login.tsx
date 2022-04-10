import { useState } from "react";
import TextField from "components/TextField";
import Button from "components/Button";
import styles from "styles/Login.module.css";
import { signIn } from "services/users";

const Login = () => {
  const [userName, setUserName] = useState('');

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const login = async()=>{
   const user = await signIn(userName)
   console.log('user',user);
  }

  return (
    <div className={styles.container}>
      <TextField
        className={styles.textField}
        onChange={handleChange}
        color="primary"
        size="small"
        id="userName"
        label="User Name"
        variant="outlined"
      />
      <Button variant="outlined" onClick={login}>
        login
      </Button>
    </div>
  );
};

export default Login;