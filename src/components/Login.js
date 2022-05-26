import styled from "styled-components";
import { connect } from "react-redux";

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt=""/>
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg" alt=""/>
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    );
};

const Container = styled.div`
padding: 0px;
`;
const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0px 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: no-wrap;

& > a {
    width: 135px;
    height: 35px;

    @media(max-width: 760px) {
        padding: 0 5px
    }
}
`;

const Join = styled.a`
font-size: 16px;
padding: 10px 12px;
text-decoration: none;
color: rgba(0,0,0,0.6);
margin-right: 12px;
border-radius: 4px;
&:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    cursor: pointer;
}
`

const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 26px;
transition-duration: 0.167s;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
text-align: center;
background-color: rgba(0,0,0,0);
text-decoration: none;
cursor: pointer;

&:hover{
    background-color: rgba(112,161,249,0.15);
    color: #0a65c2;
}
`;

const Section = styled.section`
align-content: start;
display: flex;
min-height: 700px;
padding-bottom: 130px;
padding-top: 40px;
padding: 60px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;
@media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
}
`;

const Hero = styled.div`
width: 100%;
h1{
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        line-height: 2;
        width: 100%;
    }
}

img{
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
        top: 230px;
        width: initial;
        position: initial;
        height: initial;
    }
}
`;

const Form = styled.div`
margin-top: 140px;
width: 408px;
    @media (max-width: 768px) {
    margin-top: 20px;
    width: 408px;
    }
`;

const Google = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
height: 56px;
width: 100%;
border-radius: 28px;
box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6), inset 0 0 0 2px rgba(0,0,0,0), inset 0 0 0 1px rgba(0,0,0,0);
vertical-align: middle;
z-index: 0;
transition-duration: 167ms;
font-size: 20px;
color: rgba(0,0,0,0.6);
cursor: pointer;
&:hover{
    background-color: rgba(207,207,207,0.25);
    color: rgba(0,0,0,0.75);
}
`;

const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
