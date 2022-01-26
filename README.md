## Node.js RSA Encrypt/Decrypt POC

#### Create RSA Key in PEM format (Requires `ssh-keygen` installed);
Run `npm run gen-keys`. Follow the prompts, and look for a private/public key pair named 
demo inside the `key` folder

---
### Encrypt
To encrypt a string - run `npm run env STRING_TO_ENCRYPT`

This should output something like
```
XuRSbAv2ehbj6ZQHKOUpZlZp+n8DGRDVTmZEPiLbwyJol6f1EhFnN12h9p1LQLNjQLAyEszxxJ3F49+vtFWtZqeJoWM42XEVQBKPpNpQDJOxeryWNMpwOBewGQ+2Iczz4yN2/HiCZOg/G0dG2ocJufobt1Zr3L2YJLv3BkH4G9aeiXu3BoeqlJPBmnEKF+xZdAgYFrC5Es8QERQ/xzLBvl7YeBosLQIvkC1mIfgTtYwy8kWTBU3ymcj+kHSpRF8aMkfak4UXGP8oDhEIb4oXh7TrHEN4BvSQKwusiQFlY2+FzE/XCMGXGsnID5Pnw7rc8X5jXjqyEwnQSmZyzkXH/wdotV5CHF10BRhauJeCW/2UCUBP2kXUHAxNJOFpGtMvD/3ir8PwZb15vE7isYgSwubT1nt29FJkZeAnyJzn77P8Y+obp56py3dyLgGDlhHUX4t23ZnaHXsQdbpWC01oeLS5oPEtVWL3bJh8wetQSdjb+ycYiE12vI2CcNo4cEpI
```


### Decrypt
To decrypt an encrypted string run `npm run dec $ENCODED_STRING`


---
### Test
To the - first generate keys using `npm run gen-keys` and then run `npm run test`