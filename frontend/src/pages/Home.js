import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register, getUsers } from '../actions/userAction';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [DOB, setDOB] = useState('');
  const [image, setimage] = useState('');
  const [mobile, setmobile] = useState('');
  const [jobType, setjobType] = useState('');

  const usersData = useSelector((state) => state.allUsersData);

  let { loading, list } = usersData;
  console.log('list', list, loading);

  const registerChange = useSelector((state) => state.registerData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    dispatch(getUsers());
    console.log('list222', list);
  }, [registerChange]);

  const imageChange = (e) => {
    console.log(e.target.files[0]);
    setimage(e.target.files[0]);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(name, email, DOB, image, jobType);
    if (name && email && DOB && image && jobType != '') {
      dispatch(register({ name, email, DOB, mobile, image, jobType }));
      setName('');
      setemail('');
      setDOB('');
      setimage('');
      setmobile('');
      setjobType('');
    } else {
      alert('Please insert all fields');
    }
  };
  return (
    <div className="App">
      <form type="multipart">
        <div
          className="row"
          style={{
            margin: '5%',
            padding: '2%',
            border: '1px solid black',
            minHeight: '10vw',
            height: 'auto',
          }}
        >
          <div className="col-sm-6">
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              {' '}
              <div style={{ minWidth: '200px', display: 'flex' }}>Fullname</div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                style={{ width: '200px' }}
              />
            </div>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              {' '}
              <div style={{ minWidth: '200px', display: 'flex' }}>Mobile</div>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
                className="form-control"
                style={{ width: '200px' }}
              />
            </div>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              {' '}
              <div style={{ minWidth: '200px', display: 'flex' }}>Job Type</div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
                value={jobType}
                onChange={(e) => setjobType(e.target.value)}
              >
                <input type="radio" value="FT" name="jt" /> FT
                <input type="radio" value="PT" name="jt" /> PT
                <input type="radio" value="Consultant" name="jt" /> Consultant
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              {' '}
              <div style={{ minWidth: '200px', display: 'flex' }}>
                Profile Pic
              </div>
              <input
                type="file"
                // value={image}
                onChange={(e) => imageChange(e)}
                className="form-control"
                style={{ width: '200px' }}
              />
            </div>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              {' '}
              <div style={{ minWidth: '200px', display: 'flex' }}>Email Id</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="form-control"
                style={{ width: '200px' }}
              />
            </div>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              {' '}
              <div style={{ minWidth: '200px', display: 'flex' }}>DOB</div>
              <input
                type="date"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                className="form-control"
                style={{ width: '200px' }}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <button
              className="btn btn-secondary"
              style={{ width: '200px', float: 'right' }}
              onClick={(e) => submit(e)}
            >
              + Add / Update
            </button>
          </div>
        </div>
      </form>

      <div style={{ margin: '5%' }}>
        <table className="table table-bordered ">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>DOB</th>
              <th>Job Type</th>
              <th>Action</th>
            </tr>
            {loading ? (
              <></>
            ) : (
              <>
                {list?.data?.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{value.name}</td>
                      <td>{value.email}</td>
                      <td>{value.mobile}</td>
                      <td>{value.dob}</td>
                      <td>{value.jobType}</td>
                      <td>Action</td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
