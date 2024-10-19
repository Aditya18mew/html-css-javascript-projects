 export function Book(props){
    const {img,title,author,number}=props;
    
     return <article className="book">
      <span className="marknumber">#{number+1}</span>  
     <img src={img} alt={title}></img>
     <h2>{title}</h2>
     <h4>{author}</h4>
     </article> 
   }



