import React, { useCallback, useRef, useState } from 'react'
import './app.css'
import {User} from './User'
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
  IResolveParams,
  TypeCrossFunction
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton
} from 'react-social-login-buttons';

import { ReactComponent as PinterestLogo } from '../../src/assets/pinterest.svg'; 
import SocialConfig from '../config/SocialConfig';
import Config from '../config/Config';

const REDIRECT_URI = Config.SOCIAL_REDIRECT_URI_LOCAL;
const SocialAuth = () => {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState<any>()
  const amazonRef = useRef<TypeCrossFunction>(null!)
  const instagramRef = useRef<TypeCrossFunction>(null!)
  const googleRef = useRef<TypeCrossFunction>(null!)
  const facebookRef = useRef<TypeCrossFunction>(null!)
  const microsoftRef = useRef<TypeCrossFunction>(null!)
  const linkedinRef = useRef<TypeCrossFunction>(null!) 
  const githubRef = useRef<TypeCrossFunction>(null!)
  const pinterestRef = useRef<TypeCrossFunction>(null!)
  const twitterRef = useRef<TypeCrossFunction>(null!)

  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])

  const onLogoutFailure = useCallback(() => {
    alert('logout fail')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])

  const onLogout = useCallback(() => {
    switch (provider) {
      case 'amazon':
        amazonRef.current?.onLogout()
        break
      case 'facebook':
        facebookRef.current?.onLogout()
        break
      case 'google':
        googleRef.current?.onLogout()
        break
      case 'instagram':
        instagramRef.current?.onLogout()
        break
      case 'microsoft':
        microsoftRef.current?.onLogout()
        break
      case 'github':
        githubRef.current?.onLogout()
        break
      case 'pinterest':
        pinterestRef.current?.onLogout()
        break
      case 'twitter':
        twitterRef.current?.onLogout()
        break
      case 'linkedin':
        linkedinRef.current?.onLogout()
        break
      default:
        break
    }
  }, [provider])

  return (
    <>
      {provider && profile && (
        <User 
          provider = {provider} 
          profile = {profile} 
          onLogout = {onLogout} 
        />
      )}
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        <h1 className='title'>ReactJS Social Login</h1>
        
        <LoginSocialFacebook
          ref = {facebookRef}
          appId = {SocialConfig.FACEBOOK_APP_ID || ''}
          onLoginStart = {onLoginStart}
          onLogoutSuccess = {onLogoutSuccess}
          onResolve = {({ provider, data }: IResolveParams) => {
            
            // console.log('provider'+ provider);
            // console.log(JSON.stringify(data));

            setProvider(provider)
            setProfile(data)

          }}
          onReject = {(err) => {
            console.log(err)
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialGoogle
          ref = {googleRef}
          client_id = {SocialConfig.GOOGLE_APP_ID || ''}
          onLogoutFailure = {onLogoutFailure}
          onLoginStart = {onLoginStart}
          onLogoutSuccess = {onLogoutSuccess}
          onResolve = {({ provider, data }: IResolveParams) => {
            console.log('provider'+ provider);
            console.log('data'+ data);
            setProvider(provider)
            setProfile(data)
          }}
          onReject = {(err) => {
            console.log(err)
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>

        <LoginSocialAmazon
          ref = {amazonRef}
          client_id = {SocialConfig.AMAZON_APP_ID || ''}
          redirect_uri = {REDIRECT_URI}
          onResolve = {({ provider, data }: IResolveParams) => {
            console.log('provider'+ provider);
            console.log('data'+ data);
            setProvider(provider)
            setProfile(data)
          }}
          onReject = {(err: any) => {
            console.log(err)
          }}
          onLoginStart = {onLoginStart}
          onLogoutSuccess = {onLogoutSuccess}
        >
          <AmazonLoginButton />
        </LoginSocialAmazon>

        <LoginSocialInstagram
          ref = {instagramRef}
          client_id = {SocialConfig.INSTAGRAM_APP_ID || ''}
          client_secret =  {SocialConfig.INSTAGRAM_APP_SECRET || ''}
          redirect_uri = {REDIRECT_URI}
          onLoginStart = {onLoginStart}
          onLogoutSuccess = {onLogoutSuccess}
          onResolve = {({ provider, data }: IResolveParams) => {
            console.log('provider'+ provider);
            console.log('data'+ data);
            setProvider(provider)
            setProfile(data)
          }}
          onReject = {(err: any) => {
            console.log(err)
          }}
        >
          <InstagramLoginButton />
        </LoginSocialInstagram>

        <LoginSocialMicrosoft
          ref = {microsoftRef}
          client_id = {SocialConfig.MICROSOFT_APP_ID || ''}
          redirect_uri = {REDIRECT_URI}
          onLoginStart = {onLoginStart}
          onLogoutSuccess = {onLogoutSuccess}
          onResolve = {({ provider, data }: IResolveParams) => {
            console.log('provider'+ provider);
            console.log('data'+ data);
            setProvider(provider)
            setProfile(data)
          }}
          onReject = {(err: any) => {
            console.log(err)
          }}
        >
          <MicrosoftLoginButton />
        </LoginSocialMicrosoft>

        <LoginSocialLinkedin
          ref = {linkedinRef}
          client_id = {SocialConfig.LINKEDIN_APP_ID || ''}
          client_secret = {SocialConfig.LINKEDIN_APP_SECRET || ''}
          redirect_uri = {REDIRECT_URI}
          onLoginStart = {onLoginStart}
          onLogoutSuccess = {onLogoutSuccess}
          onResolve = {({ provider, data }: IResolveParams) => {
            console.log('provider'+ provider);
            console.log('data'+ data);
            setProvider(provider)
            setProfile(data)
          }}
          onReject = {(err: any) => {
            console.log(err)
          }}
        >
          <LinkedInLoginButton />
        </LoginSocialLinkedin>

        <LoginSocialGithub
          ref = {githubRef}
          client_id = {SocialConfig.GITHUB_APP_ID || ''}
          client_secret = {SocialConfig.GITHUB_APP_SECRET || ''}
          redirect_uri = {REDIRECT_URI}
          onLoginStart = {onLoginStart}
          onLogoutSuccess = {onLogoutSuccess}
          onResolve = {({ provider, data }: IResolveParams) => {
            console.log('provider'+ provider);
            console.log('data'+ data);
            setProvider(provider)
            setProfile(data)
          }}
          onReject = {(err: any) => {
            console.log(err)
          }}
        >
          <GithubLoginButton />
        </LoginSocialGithub>

        <LoginSocialPinterest
          ref = {pinterestRef}
          client_id = {SocialConfig.PINTEREST_APP_ID || ''}
          client_secret = {SocialConfig.PINTEREST_APP_SECRET || ''}
          redirect_uri = {REDIRECT_URI}
          onLoginStart = {onLoginStart}
          onLogoutSuccess = {onLogoutSuccess}
          onResolve = {({ provider, data }: IResolveParams) => {
            console.log('provider'+ provider);
            console.log('data'+ data);
            setProvider(provider)
            setProfile(data)
          }}
          onReject = {(err: any) => {
            console.log(err)
          }}
          className = 'pinterest-btn'
        >
          <div className='content'>
            <div className='icon'>
              <PinterestLogo />
            </div>
            <span className='txt'>Login With Pinterest</span>
          </div>
        </LoginSocialPinterest>

        <LoginSocialTwitter
          ref = {twitterRef}
          client_id = {SocialConfig.TWITTER_API_KEY || ''}
          client_secret = {SocialConfig.TWITTER_APP_SECRET || ''}
          redirect_uri = {REDIRECT_URI}
          onLoginStart = {onLoginStart}
          onLogoutSuccess = {onLogoutSuccess}
          onResolve = {({ provider, data }: IResolveParams) => {
            console.log('provider'+ provider);
            console.log('data'+ data);
            setProvider(provider)
            setProfile(data)
          }}
          onReject = {(err: any) => {
            console.log(err)
          }}
        >
          <TwitterLoginButton />
        </LoginSocialTwitter>

      </div>
    </>
  )
}

export default SocialAuth;