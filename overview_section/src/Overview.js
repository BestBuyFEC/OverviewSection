
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
// import { useRef } from 'react';
import { ChevronDown } from '@styled-icons/bootstrap';
import Collapsible from 'react-collapsible';

function App() {

  const [loading, setLoading] = useState(true)
  const [description, setDescription] = useState([]);
  const [features, setFeatures] = useState([]);
  // const dropdownRef = useRef(null);
  // const [isActive, setIsActive] = useState(false);
  // const onClickSet = () => setIsActive(!isActive);

  useEffect(() => {
    fetchData();
    // fetchFeatures();
    
  }, [])

  // useEffect(() => {
  //   fetchFeatures()
  // }, [])

  const fetchData = async () => {
    await fetch('http://localhost:3030/description')
      .then((res) => res.json())
      .then((data) => setDescription(data.map((elem) => (
        {
          id: elem.id,
          name: elem.name,
          body: elem.description_body,
          sku: elem.sku
        }
      ))))
      .catch((error) => console.log(error))
      console.log(description[0])
      

      await fetch('http://localhost:3030/features')
      .then((res) => res.json())
      .then((data) => setFeatures(data.map((elem) => (
        {
          id: elem.id,
          body: elem.features_body,
          sku: elem.sku
        }
      ))))
      .catch((error) => console.log(error))
      console.log(features)

      setLoading(false);
  }

  const fetchFeatures = async () => {
    await fetch('http://localhost:3030/features')
      .then((res) => res.json())
      .then((data) => setFeatures(data.map((elem) => (
        {
          id: elem.id,
          body: elem.features_body,
          sku: elem.sku
        }
      ))))
      .catch((error) => console.log(error))
      console.log(features)
  }

    if(loading === true){
      console.log('loading')
      return(
        <h1 className="header">Loading</h1>
      )
    } else {
        return (
        <AppContainer>
          <Collapsible tabIndex={1} trigger='Overview' triggerSibling={<DownArrowIcon/>} transitionTime={200} overflowWhenOpen={'unset'}>
          <OverviewContainer> 
            {/* <h1 className='overview'>Overview</h1>
            <DownArrowIcon onClick={onClickSet} className="menu-trigger"></DownArrowIcon>
            <DescriptionContainer ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}> */}
            <DescriptionContainer>
                <DescriptionTitle>
                  <h1>Description</h1>
                </DescriptionTitle>
                <DescriptionBody>
                  <h3>{description[0].body}</h3>
                </DescriptionBody>
            </DescriptionContainer>
            <Divider/>

            <FeaturesContainer>
              <FeaturesTitle>
                <h1>Features</h1>
              </FeaturesTitle>
              <FeaturesBody>
                <h3>{features[0].body}</h3>
              </FeaturesBody>
            </FeaturesContainer>

          </OverviewContainer>
          </Collapsible>
          
            {/* <h3>{description[0].name}</h3> */}
            
        </AppContainer>
      )
    }
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 1500px; */
  font-size: 13px;
  margin: 0;
`
const OverviewContainer = styled.nav`
font-family: Arial,Helvetica,sans-serif;
.menu{
  visibility: hidden;
}
.menu.active{
  visibility: visible
}
.overview{
  font-size: 25px;
}
`

const DescriptionContainer= styled.div`
  display: flex;
  padding-top: 20px;
  `
const DescriptionTitle = styled.div`
   width: 240px;
   h1{
     font-weight: 400;
   }
`
const DescriptionBody = styled.div`
  display: flex;
  /* max-width: 900px; */
  font-size: 13px;
  h3{
    font-weight: normal;
  }
`
const FeaturesContainer = styled.div`
  display: flex;
  height: 200px;
  h3{
    font-weight: normal;
  }
`
const FeaturesTitle = styled.div`
  width: 240px;
  h1{
     font-weight: normal;
   }
`
const FeaturesBody = styled.div`
  /* max-width: 900px; */

`
const Divider = styled.div`
  border: 1px solid #DDD;
  margin-left: 240px;
  max-width: 900px;
  margin-top: 30px;
  margin-bottom: 30px;
`
const DownArrowIcon = styled(ChevronDown)`
  height: 20px;
  justify-self: flex-end;
  /* position: fixed; */
`


