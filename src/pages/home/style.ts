import styled from 'styled-components';

export const IndexWrapper = styled.div`
    .header {
      height: 763px;
      text-align: center;
    }
    
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
      height: 80px;
    }
    
    .App-header {
      background-color: #222;
      height: 150px;
      padding: 20px;
      color: white;
    }
    
    .App-title {
      font-size: 1.5em;
    }
    
    .App-intro {
      font-size: large;
    }
    
    @keyframes App-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
`;
