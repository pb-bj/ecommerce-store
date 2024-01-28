import './Cart.scss';
import { useContext, useState } from 'react';
import { FiTrash } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";

import { Button } from '../../components';

import { CartContext } from '../../contexts/CartContext';
import { WishListContext } from '../../contexts/WishListContext';

const Cart = () => {
  const { cart, deleteCartItem, incrementCart, decreaseCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);
  const [ wishlistColor, setWishlistColor ] = useState(null);

// total cart amount 
  const totalCartAmount = cart.reduce((acc, curr) => {
      const itemPrice = (curr.price || 0 ) * ( curr.quantity || 0)
        return acc + itemPrice;
  },0)

  const paymentImage = [
    'data:image/png;base64,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',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAlCAYAAADC3P4WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAraSURBVHgB7Vl7cFTVGf+de3f37jMbkkBCEp5FKFof+AIURXy11UFbEUSUDto/Skt9AaIMbcdWfCCjtjq0aquDVGoroPKoyrRTaeuoaAkPeUMgyishsJtsdvfu4957+p17dzd7N0CCk5aEyW/m7L33PL5zzu985/u+cxboQQ960IMe9KAHPfh/gImfrdXVJbrDN5U+i9HtwcMGkqtG1NXVoQuB1fQbVinL+IgoH8jQ/cFN5WENjBvTz6/bvZKZWWcekuww7qGhDaJ3xs+CZE2Ll4OxedvOPdeHLgKJQ+rTVVa9c8GqUqGUB10EUvejWFiG7mfkHCct0Q1IPi8cZWVgigtGXIUeCsFIJnHmwOA5/zx4L7oA0Y8/QXJPLamKhO6AtkRzDuUbg1G94An4RlwEntUeyq9f+Bwaf/fKmZscDcV/5Sj0nT3T1Orox+txYObDSDc2oqujDWNyaQkGLf4DfBePMAllNKFsEmSfUVD/x5csxd6Jd+L4H5fCN/JSDFm1HP4rRiPnBzsOho41YqdR96Roo9Fi0K6qSpsdTB8+DO14CHokgjMN2euDe+g5OPLUQkT+sQ4DfvsCqp96HHu/NxFaOHyCFn29gUDUdIpOpzMdCoUibnfxAMb0asakpNOJ2ubm5ia0DQgUqteXMaOcc0OhugnOU/WJROIglRkoKwsEkklXtnJLS8vx/MbBYLCXYRiSVeZX8zTaItZZUW4jWWtqwt7JU7HnlgkIvbXCMhtULvl8cPTpDUfvMshkyy1tZ3ZxudSaz2hmjtJSsy1znMhFMHDyD7LfT7Kz8n05Ge7hw1A1/5cY8s4yqNt24MAj80zFKJ12dxuuVM6Z1x+bpulsA6UaVU2/4/YG7mWSsYnk/ZuDr0+m+H+83sA9+YP3er0Xe7yBv4DpOyj3EyZJ6+j5qSS7vnB7i1YpgcBQJZ4aI2Rm0gaPJ3BFVobf7++dSvO12XKPJzo9N1P/FSPR5yfT4RrQ3zZYyeNBv6efMCd6bPES8HQaJRMnkEO6EHJRwCQ4HQojtW8/Qm+/i6ZVa2ixKtD/+Wdsco488xw83xyG0rvuoD4GmKYodegwwitXW3Y/Y5q8Iy5EyZ13wD/6cjh69TLztKZmJGv3IfLhOkTW/o3s8hySv5D8yHx8df9MJHbvQfGt43GU5PCE3VkbnBeR4ROTYuRviqmXq4Q+ZVZFom4Hc7AXFa9fScajL7lc/uEU8q6hsgphMan7FnrGOedBEkGycBPTpSqng09Ma1CoXrlFFJ9Ev5+YfRpsJD0uMXM5T3ODrc4R7azqS5Mb2SZ0khSFFmGU+S40S3h9S/Fa6ymkfUr/fmZ7/6jLcfyNN+mZJ4tGW/7TH6Po2mts7dzDhqJi5gPUtj8OzJmL0qlT0PfRh01tzq/nom9XdRUCV49BYNxYHLjvQTQsegnM5YRBxIZWvINe42+Gs7LSXPCTgSQW0eMrg2OhRLufZjSHqOxHL16JS4+WlJQsjce123LkgdWBG1NVlW33ejGGdgBtaUac8eGplFHNZLaUooWHLNHSTfScQylF6fvIaDet5LZ4MrInRzRPpEwbJ/v8ZjiXyzcM6GQ+hHZ5LviWbeCijGUJEctPi1I6ZTKUgQMKZshQdN24HOk2U0Lmo/iWm5HYtQsVj8yG5HZb1TQd6YYGGNGouYiMdpYpZ+zVqF74DOp+NANMsug7/trrZhLjaSfGNjSOSWk1sl40dPuD25mBv5tCGPrFU/qljDle17XkSmvYjngy2VJXVlbmjcWSx/JkK5LEirmB5dTuQbM9xyAyGedEo9H9xMpoZhHNdRgvi/KcjW5+/wPsGD0W9b9+wU5mLIYvZzwIvSVqy49v3oLaCZOxZ/xtiK7/zFZmRgEFExYmJ/zWcjS8sMg0A/mQSF0qfzEvR7JYjKMvLsKucTdi93fGY++kKUjX1+fqF91wLZRBA5A1q7Q9zdSBg8xRIvnz7JBkrm2nZyhbyHR+gaqGDpLjS0mSNF6SjAUeb7AmFk/tpq4+REHwoKotG+mxIfMp61z+rtsduIRGMSST1+xzu/4k+mrVaNIg+qGDim4fGg3ePXQI5IDfln3oscehbtlqvtcveBZDVvz5lPF1aPnbODj352B0g5U+XI/qpx+3E5P3bsTjULfvhG/UZZkMcsrHQqbtt6oyBG+4Do2vLj7NkJMlLGnZLplOmqhlvzmJ9Xj8t1PBIvrsDXMNDSpn+0jl/0VkC7OST3aSapDTZJfC1Gp+FWOm7bfqcKylKKcFONXJMNu5OMDQ1rVFkWTkknv35SYptI3TidHc3idBvGZTLhZPN9SfUvtERDPwlUX2zIJF8ZAzRvumonA2VR6Pp5+qqgfEl65Lg2leJblS4Bj1/iSzSBZjXScxfZaiKPs0TXNQBHF7oUDDyVZKGubRO3luXE0O95ys2TAYXkcmFGr3iGdZdNkeORXOjSbM29EsntZa3wt3zYnqa5o9kenJT3JRkWWTTw8O8qCPki3t43a7+5PBeRJWBCKgU4hQQ+tWlh0CTXR1PB7fFA6Hm5MaH4sTHFqSkUgt5a7NfIqoZrj5xrDb7WSftnbcHqjn9JEjbfKUwQOhfrHN/JTLSk1H2FnQm5tRO/lu8guxvD7tdUQYx07/KkBsqem6IU1ikktILM2T+FeyuVvcnqIQTa8YloOc6/EEKyhIcxHtU9A6CtIrKRsxcIoBl1KIKMK71gFRSJc5CJlof6SkqfGNm8n7x2zZfWZMh7O8nGx3ABWzHjJtb2dBaKtwqOJEmj50CBqZJhE6isglm2Sf5zTNhsmOSlQth0WwMBk8kzYYujSLnjEi9Vcids7k040an01v91PbHfTdmMkXtAiHZw6Api40N5LXT1rX9cXIswPtazQhsb8OTWvWoGTyHbnJBW+8gRzS9aYkVjDh+IYaeMVdSUeJoFHHajZa9yvMugat/NlcBCk2Th84aMpyVfbNVdfoFrF59Xv4GpDUWOQexVu0WAa/iptbgm9WY55VQIOpSYlYyxJFCdI/TsZEJktlpK0i3PqctP09t7vXlVzSRSwOWeKCdKFdLl1n5LW5klN4xv6ZSrXU5nfcIaJF80OPPQFndX8ExuSFbiJ2hp0wcX159KXfY/CS19BRiMUKL1sBdet2lP3grhzZPuHwRMqDRqfQL2c8cJJ7jY51l4xH3qfnB63dR+zlyWZB0gKrzHJsoiCRCH+UV498f3AWafx8btr51lCZ8kRIl8gX2oZoI5mCHs6ZFugUR5PXMR3Q/mk/RPDbN6Li4YfMQwnPyaUohP4LbXz5VYTpGC6O2Dodm22j19KtH7p1CMp3sDqZpiPzn0L43ZXmNajvclISR6s5EnfhTSvXoP7Z52GoCXQCeAfLT1HPoAEypaDNp7Qr3iisyTYNHPYbieE+3hr9t5VXGO8aOuReJXRatP401442ElFRe71TyTlZhJIpty6VfNafDnTM1pvC0BpD4jyLjoL22pGWePqi6yPHyETwe6086Go8IpxWZ6wUabR/ApmfaZmhxyj6+khVo6/SZ7xN5TZEnyUQRGuqduHF9XuPFRR15qX6iTg7oXzH2fnHrHlrlw2y/5fz67BsOtJj52meY7sFaCvvbK6v/toes7PhSCL9phPOa4jsW1l3/Hu5AOKMyrj0Gbnb2eOwTkMXgUnsW5goD6nYWIKg7EQ3hyspG9svO69x0rJl7Z/ze9CDHvSga+O/FmKNbgoG/FsAAAAASUVORK5CYII=',
    'data:image/png;base64,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',
    'data:image/png;base64,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',
  ]
  
  // console.log(cart)
  return (
    <section className='cart-section'>
        { cart.length > 0 ? (
          <div className='cart-main'>
            <div className="cart-left">
              { cart.map((item) => (
                <div className='cart-wrapper' key={item.id}>
                    <div className='cart-image'>
                      <img src={item.image} alt="" />
                    </div>
                  <div className='cart-content'>
                      <div className='cart-title'>{item.title}</div>
                      <div className='cart-price'>$ {item.price}</div>
                  </div>
                  <div className='cart-counter'>
                    <div className='cart-counter-top'>
                        <button className="decreaseCounter" onClick={() => decreaseCart(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button className="increaseCounter" onClick={() => incrementCart(item.id)}>+</button>
                    </div>
                    <div className='cart-counter-bottom'>
                        <div onClick={() => deleteCartItem(item.id)} > 
                          <FiTrash/>
                        </div>
                        <div title='add to whishlist' 
                            onClick={() => {
                                addToWishList(item.id)
                                setWishlistColor('red');
                            }}
                            >  
                          <MdFavorite style={{ color : wishlistColor}} />
                        </div>
                        <div>

                        </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
              <div className="cart-right">
                <div className="wrapper">
                    <h3>Order Summary</h3>
                    <div className='subtotal'>
                      <p>Subtotal</p>
                      <p>Rs {(totalCartAmount).toFixed(2)}</p>
                    </div>
                    <div>
                      <Button label='PROCEED TO CHECKOUT' className='btn-secondary'/>
                    </div>
                </div>
                  {/* payment-section */}
                  <div>
                    <h3 style={{ marginTop : '25px', fontWeight:'500', letterSpacing: '-1px'}}>Payment Options :</h3>
                    <div className='payment'>
                          { paymentImage.map((item) =>(
                            <div className="payment-image" key={item}>
                              <img src={item} alt="" width={60} />
                            </div>
                          ) ) }
                      </div>
                  </div>
     
              </div>
          </div>
        ) 
        : (
          <div>
              
          </div>

        ) 
        }
    </section>
  )
}

export default Cart