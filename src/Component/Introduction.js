import React, { Component } from 'react';
import ro from '../img/ro.png';
import UV from '../img/UV.png';
import ess from '../img/ess.jpg';
import hrr from '../img/hrr.jpg';
import pr from '../img/pr.jpg';

class introduction extends Component{
    render() {
        return (
            <div>
            <div class="display-3 text-center">Introduction</div>
<div class="about1">
    <h2>
We have grown up drinking ZeroB water and over the
years, th brand has gained followers across age
groups.<br></br>
ZeroB has taken utmost pride in safe guarding families,
house, businesses and smiles from perils of impure
water for the last 50 years!<br></br>
ZeroB, Flagship brand of Ion Exchange (India) Ltd., with
its strong national and international presence, has
emerged as a premier water and environment
management company. ZeroB has pioneered many
path-breaking innovations in the field of technology
and marketing to provide a one-stop water solution for
your home and the community in general. It promises to
offer you water that is pure and safe for drinking and
other applications.<br></br>
At ZeroB, every product is crafted with meticulous
attention to detail so that it provides ultimate defence
against all water-borne diseases and ensures complete
protection for your family<br></br>
The water purified by ZeroB products is tested and
certified by several laboratories across the world to
match the USEPA/IS standards. Ion Exchange (India)
Ltd., has led virtually every breakthrough in the quest of
fulfilling the company’s vision, “To be a leader in our
business which is so vital to people’s lives ans the
environment.” Now the results of our progress in water
purification technology have been made available
easily via our e-commerce site. Take a small step
towards ensuring safe & pure water for you home and
offices by logging on to www.zerobonline.com 
</h2>

</div>
<div class="display-3 text-center">Technologies that we work on</div>
<br></br>
<ul>
    <li>
        <div class="display-4">Reverse Osmosis (RO) Technology</div>
        <div class="display-5">
        <div> A multi-stage purification process used to remove a majority of
contaminants from water
by pushing the water under pressure through a semi-permeable
membrane.</div>
        <img src={ro} ></img>
        </div>
    </li>
    <br></br>
    <li>
    <div class="display-4">UltraViolet (UV) Technology</div>
    <div class="display-5">
    <div>In this technology, water is made to pass through invisible Ultraviolet
(UV) light emitted by a UV light source placed in front of a flow
chamber which destroys the harmful microbiological impurities
present in the water.</div>
    <img src={UV} height="300" width="200" ></img>
    </div>
    </li>
    <br></br>
    <li>
    <div class="display-4">ESS Technology</div>
    <div class="display-5">
    <div>Conventional water purifiers do not have means or device to prevent
microbial growth on the filtering element. Also, post disinfection or a
post purifier to prevent recontamination of water arising from an
outside environment, do not provide residual protection. Hence,
purifier elements are replaced from time to time to control biofilm
build up or sanitization is carried with oxidizing chemicals, which is
cumbersome and time consuming.
ESS (Electrolytic Sanitizing System) is a patented technology in which
small amount of silver ions are released at regular intervals to sanitize
the entire system. It protects the purified water from recontamination
of water for a week and prevents slime formation in storage water
tank, which is superior to UV + UF Technology</div>
    <img src={ess} height="300" width="200" ></img>
    </div>
    </li>
    <br></br>
    <li>
    <div class="display-4">HRR Technology</div>
    <div class="display-5">
    <div>A strong drawback of RO technology is that a large percentage of
water is wasted for the purifying process. The RO membrane recovers good
water to the extent of maximum 30%, remaining 70% is rejected. Also
purified water can get again contaminated due to external factors.
In a RO process the best recoveries recommended by the RO membrane
manufacturers is 15%-20% from a single membrane.
An innovative HRR, High Recovery RO process, specifically Water Saver
Cartridge (WSC) releases ingredients that keep the surface of membrane
clean, kill the microbes and hence allows the process to be operated at high
recovery levels.
Recovery is as high as 70 % from a single RO membrane, it also saves more
than 80% of water compared to conventional RO purifiers.
HRR is certified by an NABL accredited lab for chemical contaminant
removal, pesticide removal, bacteria, virus removal, shelf life of product
water, and for HRR claims.</div>
    <img src={hrr} height="500" width="800"></img>
    </div>
    </li>
    <br></br>
    <li>
    <div class="display-4">PURPLE RESIN</div>
    <div class="display-5">
    <div>Ion Exchange is India’s first company to introduce softeners with highly
reliable Food Grade and ZRNAF resin. This resin prevents entry of spurious
and harmful replacement media, whenever it is replaced after its life cycle.
Unique purple colour differentiates it from locally available industrial resin
that is not suited for residential purposes.</div>
    <img src={pr} height="300" width="400"></img>
    </div>
    </li>
</ul>
</div>
        );
    }
}
export default introduction;