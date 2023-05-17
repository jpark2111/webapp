import './App.css';
import { googleSignIn } from '../../services/authService';

function App() {
  const onGoogleSignIn = () => {
    googleSignIn().then(onSuccess).catch(onError);
  };

  const onSuccess = (res) => {
    console.log(res.data.item);
    window.location.href = res.data.item;
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <div className="container">
      <div className="container-md vh-100 d-flex justify-content-center align-items-center">
        <div className="w-50 h-50 d-flex justify-content-center align-items-center">
          <div className="w-50 h-50 d-flex flex-column justify-content-center">
            <div className="p-2 d-flex justify-content-between">
              <div className="ps-3">
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="text" name="email" />
              </div>
            </div>
            <div className="p-2 mt-2 d-flex justify-content-between">
              <div className="ps-3">
                <label htmlFor="email">Password</label>
              </div>
              <div>
                <input type="text" name="password" />
              </div>
            </div>
            <div className="p-2 mt-2">
              <div className="ps-3">
                <button>sign in</button>
              </div>
            </div>
            <div className="p-2 mt-2">
              <div className="ps-3">
                <hr></hr>
              </div>
            </div>
            <div className="p-2 mt-2">
              <div className="ps-3">
                <span className="label">Sign in with:</span>
                <div id="customBtn" onClick={onGoogleSignIn}>
                  <span className="icon"></span>
                  <span className="buttonText">Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
