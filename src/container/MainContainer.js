import React from 'react';
// import NavBar from '../component/NavBar';
// import { Link } from 'react-router-dom';
import '../KBeautySteps.css'
import StepTabs from '../component/StepTabs';


function MainContainer(props) {
  let userName;
  if (props.currentUser) {
    userName = props.currentUser['first_name'].toUpperCase();
  } else {
    userName = null;
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <h4>
        START YOUR GLOW UP SKIN CARE JOURNEY WITH US {userName}
      </h4>
      <h5>
        Skin care is an evolving personal journey and we’re here to guide you along the way.
        </h5>
      <img src='/kbeautystepscomic.jpg' style={{ width: '60%' }} />

      <div className='info-10-step'>
        The 10-Step is more than a routine—it's a lifestyle that has become a global phenomenon, grounded in Korea's cultural obsession with healthy skin and backed by decades of scientific advancement. It's not about having more products than you can count, but rather about having the right products that do the right things, and using them in the right order.
          </div>

<hr/>
<br/>
<br/>
      <StepTabs>
        <div label="Step 1">
          <h4>Make Up Remover / Oil Cleanser</h4>
          <br />
            <div>
          <div className='step-info'>
            <img src='../1.png' />
          Oil cleansers are the base of the Korean skin care routine and the first step of the double cleanse. They're not only relaxing to use; as you gently massage these cleansers in, they also remove makeup and draw out other oil-based impurities, such as sebum, SPF, and pollution.

            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Breaks down oil-based debris such as makeup and sunscreen</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Morning and night, gently massage into dry skin, add lukewarm water to emulsify, then rinse</p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Macadamia oil<br/> Jojoba oil<br/> Grape seed oil</p>
          </div>
            </div>
            </div>
        </div>



        <div label="Step 2">
          <h4>Water Based Cleanser</h4>
          <br />
          <div className='step-info'>
            <img src='../2.png' />
          The second step of the double cleanse. Cleansing twice is recommended by aestheticians and dermatologists  because it helps to thoroughly remove any impurities that can cause breakouts.  Water-based cleansers dissolve the water-based impurities such as dirt and sweat that your oil cleanser didn't pick up.
            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Removes water-based impurities such as sweat and dirt</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Morning and night, apply to your damp face and neck and massage in a circular motion, then rinse with lukewarm water</p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Green tea <br/> Rice extract <br/> Pearl extract</p>
          </div>
            </div>
            </div>

            <div label="Step 3">
          <h4>Exfoliator</h4>
          <br />
          <div className='step-info'>
            <img src='../3.png' />
          Physical and chemical exfoliation help clean pores and slough off dead skin cells for visibly brighter and smoother skin. Regular exfoliation will also help your other skin care products absorb and work more efficiently!
            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Cleans debris from pores and removes dead skin cells</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Gently exfoliate 1-2 times/week, focusing on your nose and the visible pores on your cheeks</p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Black sugar <br/> Salicylic acid <br/> Lactic acid</p>
          </div>
            </div>
            </div>




            <div label="Step 4">
          <h4>
            Toner
          </h4>
          <br />
          <div className='step-info'>
            <img src='../4.png' />
          Toners are the ultimate prep product, removing any leftover residue from your cleansers while also repairing your skin’s barrier to effectively absorb the moisturizers that follow. Think of your skin like a sponge—it’s more difficult to rehydrate it when it’s dried up and hardened than when it’s already a bit damp.
            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Balances moisture and pH levels</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Use a cotton pad to swipe all across your face or pat gently into your skin using your hands.</p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Aloe <br/> Licorice <br/> Citric acid</p>
          </div>
            </div>
            </div>
            


            <div label="Step 5">
          <h4>Essence</h4>
          <br />
          <div className='step-info'>
            <img src='../5.png' />
          Essences are lightweight and packed with a concentrated blend of hydrating, anti-aging, and complexion-enhancing ingredients
            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Hydrates and aids in cell turnover</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Sprinkle into hands and lightly pat into face and neck </p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Rice extract <br/> Birch juice <br/> Hyaluronic acid <br/> Yeast</p>
          </div>
            </div>
            </div>


 
            <div label="Step 6">
          <h4>Treatments / Ampoules</h4>
          <br />
          <div className='step-info'>
            <img src='../6.png' />
          Boosters, serums, and ampoules are the ultimate skin perfectors. Packed with powerhouse ingredients, they target specific skin concerns such as acne, fine lines, and hyperpigmentation.
            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Directly treats problem areas</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Gently tap into skin, focusing on areas affected by skin concern</p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Soybeans <br/> Tea tree <br/> Vitamin C</p>
          </div>
            </div>
            </div>


            <div label="Step 7">
          <h4>Sheet Mask</h4>
          <br />
          <div className='step-info'>
            <img src='../7.png' />
          If essences are the heart of the Korean skincare routine, sheet masks are the soul. The key to sheet masks is the sheet, which when in prolonged contact with your face allows the skin to fully absorb the nutrients and moisture. Plus, they promote the quiet, meditative ritual of relaxation.
            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Infuses your skin with concentrated essence.</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Smooth onto clean skin, lie back and relax for 15-20 minutes, then pat in excess essence</p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Cucumber <br/> Green tea <br/> Rose</p>
          </div>
            </div>
            </div>




            <div label="Step 8">
          <h4>Eye Cream</h4>
          <br />
          <div className='step-info'>
            <img src='../8.png' />
          The skin around your eyes is the thinnest and most delicate on your face, and regularly using an intensive eye cream can keep dark circles, puffiness, and crow’s-feet at bay. Eye creams are concentrated with beneficial ingredients and formulated to be extra gentle and non-irritating.
            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Hydrates and prevents dark circles, puffiness, and crow’s feet</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Use your pinkie to gentle tap (never rub!) around the entire orbital bone, avoiding the water line</p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Honey <br/> Ginseng <br/> Lily</p>
          </div>
            </div>
            </div>

            <div label="Step 9">
          <h4>Moisturizer</h4>
          <br />
          <div className='step-info'>
            <img src='../9.png' />
          They come in many forms (emulsion, lotion, gel, cream, and sleeping mask) and seal in moisture to plump up skin and smooth fine lines.
            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Seals in moisture to plump and smooth skin</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Pat into your face and neck morning and night, every day.</p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Bamboo <br/> Hyaluronic acid <br/> Centella asiatica (cica) <br/> Snail mucin <br/> Green tea</p>
          </div>
            </div>
            </div>


            <div label="Step 10">
          <h4>Sunscreen</h4>
          <br />
          <div className='step-info'>
            <img src='../10.png' />
          You should always wear sunscreen, even if you’ll be inside most of the day. It’s the easiest and most effective way to prevent premature aging (and skin cancer!). Sunscreen should be your last step so it can shield your skin without being diluted by additional products.
            </div>
            <br/>
            <br/>
            <div className='step-details'>
          <div className='step-details-box'>
          WHAT IT DOES
          <br/>
          <p>Protects the skin from damaging UV rays.</p>
          </div>
          <div className='step-details-box'>
          HOW TO
          <p>Gently pat into your face and neck as the last step in your morning routine. Re-apply throughout the day.</p>
          </div>
          <div className='step-details-box'>
          INGREDIENTS TO LOVE
          <p>Titanium dioxide <br/> Zinc oxide</p>
          </div>
            </div>
            </div>

      </StepTabs>

    </div>
  )
}

export default MainContainer;