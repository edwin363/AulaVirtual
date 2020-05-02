import React, { useState } from "react";
import { useDispatch } from "react-redux";
import login from "../redux/actions/loginActions";

const LoginGeneral = () => {

    const dispatch = useDispatch();
    const [user_name, set_user_name] = useState('Usuario');
    const [user_license, set_user_license] = useState('Contraseña');

    return (
        <>
            <div className="form-group">
                <label className="text-white">Carnet/ID</label>
                <input type="text" className="form-control" 
                placeholder="Carnet/ID"
                    value={user_name}
                    onChange={
                        (event) => {
                            set_user_name(event.target.value)
                        }
                    }
                />
            </div>
            <div className="form-group">
                <label className="text-white">Contraseña</label>
                <input type="text" className="form-control" 
                placeholder="Contraseña"
                    value={user_license}
                    onChange={
                        (event) => {
                            set_user_license(event.target.value)
                        }
                    }
                />
            </div>
            <button className="btn btn-primary mt-3" onClick={
                () => {
                    dispatch(login(user_name, user_license))
                }
            }>Sign In</button>
            <br/>
            <br/>
        </>
    )
}

export default LoginGeneral;