
const CardComponent =() =>
{
    return<>
      <div style={{display:"flex", gap:"2rem"}} >

        <div className="card w-96 glass">
        <figure><img src="https://static.nike.com/a/images/t_default/5c3654f1-e3d9-4d9d-838e-fe4cdc30d352/gt-jump-basketball-shoes-Mj4kHp.png" /></figure>
        <div className="card-body">
            <h2 className="card-title">Nike shoes</h2>
            <p>Nike shoes are renowned for their innovative designs, performance-oriented features, and iconic branding, making them a popular 
                choice in sports and fashion.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More!</button>
            </div>
        </div>
        </div>

        <div className="card w-96 glass">
        <figure><img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png" /></figure>
        <div className="card-body">
            <h2 className="card-title">Nike shoes</h2>
            <p>Nike shoes are renowned for their innovative designs, performance-oriented features, and iconic branding, making them a popular 
                choice in sports and fashion.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More!</button>
            </div>
        </div>
        </div>
        </div>

    </>
    

}
export default CardComponent;