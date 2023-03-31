import { useState } from "react";


export default function SearchBar({ onSearch }) {
    const [id, setId] = useState("");
  
    const handleChange = (event) => {
      setId(event.target.value);
    };
  
    return (
      <div>
       <div class="input-group">
              <div class="form-outline">
        <input
           class="form-control"
           type="search"
          onChange={handleChange}
          placeholder=" enter id character"
        />
        <button type="button"
                class="btn btn-primary"
                style={{ backgroundColor: "#38680b" }} onClick={() => onSearch(id)}>
          Search
        </button>
      </div>
      </div>
      </div>
    );
  }