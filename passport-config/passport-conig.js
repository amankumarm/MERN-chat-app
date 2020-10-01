const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20')
const keys=require('../keys')
const User=require('../models/user');

passport.serializeUser((user,done)=>{
    done(null,user.googleid)
})

passport.deserializeUser((id,done)=>{
    User.findOne({googleid:id})    
    .then((userfound)=>{
        done(null,userfound)

    })
    .catch((err)=>{
        console.log(err)
    })
})



passport.use(new GoogleStrategy({
    callbackURL:'http://localhost:5000/auth/google/redirect',
    clientID:keys.googlekeys.clientId,
    clientSecret:keys.googlekeys.clientSecret
},(accessToken,refreshToken,profile,done)=>{
    User.findOne({googleid:profile.id})
    .then((user)=>{
        if (user) {
            console.log(typeof profile.id)
            done(null,user)
        }
        else{
            console.log(typeof profile.id)
            new User({username:profile.displayName,googleid:profile.id}).save()
            .then((newuser)=>{
                done(null,newuser)
            })
            .catch((err)=>{
                console.log(err)
                done(err,false)
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    
})

)