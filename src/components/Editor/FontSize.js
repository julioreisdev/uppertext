import styled from "styled-components";

export default function FontSize() {
  return (
    <Container>
      <select>
        <option>Roboto</option>
        <option>Times new Roman</option>
      </select>
      <select>
        <option>8</option>
        <option>10</option>
        <option>12</option>
        <option>14</option>
        <option>16</option>
        <option>18</option>
        <option>20</option>
        <option>22</option>
        <option>24</option>
        <option>26</option>
        <option>28</option>
        <option>30</option>
        <option>32</option>
        <option>34</option>
        <option>36</option>
        <option>38</option>
        <option>40</option>
        <option>42</option>
        <option>44</option>
        <option>46</option>
        <option>48</option>
        <option>50</option>
        <option>52</option>
        <option>54</option>
        <option>56</option>
        <option>58</option>
        <option>60</option>
        <option>62</option>
      </select>
    </Container>
  );
}

const Container = styled.div`
  width: 33%;
  display: flex;
  justify-content: space-between;
`;
