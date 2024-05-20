
const express = require('express');
const router =  express.Router();

const {handleGetALlUser, handleGetUserByID,
     handleUpdateUserByID, handleDeleteUserByID,
     handleCreateNewUser} = require('../controllers/user')


// ____  Routes  ____  Getting Data through DB  ________
router.route("/").get(handleGetALlUser).post(handleCreateNewUser);

// router.get('/', handleGetALlUser);
// router.get("/users", async(req, res) => {
//     const allDbUser =  await User.find({}); 
//     const html = `<ul>
//                     ${allDbUser.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//                 </ul>`;
//     res.send(html);
// });

router
    .route("/:id")
    .get(handleGetUserByID)
    .patch(handleUpdateUserByID)
    .delete(handleDeleteUserByID)

// router
//     .route("/:id")
//     .get(handleGetUserByID)
//         // OR || const user = await User.findById(req.params.id);
//         // if(!user)   return res.status(404).json({error: "User not found"});
//         // return res.json(user);
//     // })
//     .patch(handleUpdateUserByID)
//         // await User.findByIdAndUpdate(req.params.id, {lastName: "ChangeTOKumar"});
//         // return res.json({status: "Success"});
//     // })
//     .delete(handleDeleteUserByID)
//     //     await User.findByIdAndDelete(req.params.id);
//     //     return res.json({status: "Deleted"});
//     // })
// // __________________________________________________________________________________________________

router.post(handleCreateNewUser)
    // const body = req.body;
    // if(
    //     !body || 
    //     !body.first_name || 
    //     !body.last_name || 
    //     !body.email ||
    //     !body.gender ||
    //     !body.job_title
    // ){
    //     return res.status(400).json({msg: "All fields are required"});
    // }          

    // const result = await User.create({              // result will get the return of the User created
    //     firstName: body.first_name,
    //     lastName: body.last_name,
    //     email: body.email,
    //     gender: body.gender,
    //     jobTitle: body.job_title,
    // });
    // console.log("Result: ", result);
    // return res.status(201).json({msg: "Success"});
// });

module.exports = router;