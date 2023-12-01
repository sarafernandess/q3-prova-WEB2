var usuarios = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@email.com',
      data_nascimento: '10/12/1998',
    },
    {
      id: 2,
      name: 'André',
      email: 'andre@email.com',
      data_nascimento: '15/09/2000',
    },
    {
      id: 3,
      name: 'Lucas',
      email: 'lucas@email.com',
      data_nascimento: '02/04/1995',
    },
  ];
  

exports.find = (userID) => {
    if (userID > 0) {
        return usuarios.find((usuario) => usuario.id === userID);
    }
    return usuarios;
}

exports.create = (user) => {
    let newID = usuarios.length + 1;
    let isUserValid = user.hasOwnProperty('name');
    isUserValid &= user.hasOwnProperty('email');
    isUserValid &= user.hasOwnProperty('data_nascimento');

    if (!isUserValid) {
        return "Usuario invalido!"
    }

    user.id = newID;

 usuarios.push(user);
    return user
}

exports.delete = (userID) => {
 usuarios = usuarios.find((usuario) => usuario.id != userID);

    return usuarios;
}

exports.update = (userID, obj) => {
    let user = usuarios.find((usuario) => usuario.id == userID);

    for (v of Object.keys(obj)) {
        if (v in user[0]) {
            user[0][v] = obj[v];
        }
    }
    return user;
}