import Header from "@/components/Header";
import Title from "@/components/Title";
import Center from "@/components/Center";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@/components/Button";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import { RevealWrapper } from "next-reveal";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import ProductBox from "@/components/ProductBox";
import Tabs from "@/components/Tabs";
import SingleOrder from "@/components/SingleOrder";

const ColsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin: 40px 0;
  p {
    margin: 5px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const WishedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export default function AccountPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [wishedProducts, setWishedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('Commandes');
  const [orders, setOrders] = useState([]);
  const [saveSuccess, setSaveSuccess] = useState(false); 

  async function logout() {
    await signOut({
      callbackUrl: process.env.NEXT_PUBLIC_URL,
    });
  }

  async function login() {
    await signIn('google');
  }

  function saveAddress() {
    const data = { name, email, city, streetAddress, postalCode, country };
    axios.put('/api/address', data)
      .then(() => {
        setSaveSuccess(true); 
      })
      .catch(error => {
        console.error('Erreur lors de la sauvegarde des données:', error);
      });
  }

  useEffect(() => {
    if (!session) {
      setLoading(false); 
      return;
    }
    setLoading(true); 

    axios.get('/api/address')
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
        setCity(response.data.city);
        setPostalCode(response.data.postalCode);
        setStreetAddress(response.data.streetAddress);
        setCountry(response.data.country);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de l\'adresse:', error);
      })
      .finally(() => {
        setLoading(false); 
      });

    axios.get('/api/wishlist')
      .then(response => {
        setWishedProducts(response.data.map(wp => wp.product));
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de la liste de souhaits:', error);
      });

    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des commandes:', error);
      });

  }, [session]);

  function productRemovedFromWishlist(idToRemove) {
    setWishedProducts(products => products.filter(p => p._id.toString() !== idToRemove));
  }

  return (
    <>
      <Header />
      <Center>
        <ColsWrapper>
          <div>
            <RevealWrapper delay={0}>
              <WhiteBox>
                <Tabs
                  tabs={['Commandes', 'Wishlist']}
                  active={activeTab}
                  onChange={setActiveTab}
                />
                {activeTab === 'Commandes' && (
                  <>
                    {loading && <Spinner fullWidth={true} />}
                    {!loading && (
                      <div>
                        {orders.length === 0 && (
                          <p>Connectez-vous pour voir vos commandes</p>
                        )}
                        {orders.length > 0 && orders.map(o => (
                          <SingleOrder {...o} key={o._id} />
                        ))}
                      </div>
                    )}
                  </>
                )}
                {activeTab === 'Wishlist' && (
                  <>
                    {loading && <Spinner fullWidth={true} />}
                    {!loading && (
                      <>
                        <WishedProductsGrid>
                          {wishedProducts.length > 0 && wishedProducts.map(wp => (
                            <ProductBox
                              key={wp._id}
                              {...wp}
                              wished={true}
                              onRemoveFromWishlist={productRemovedFromWishlist}
                            />
                          ))}
                        </WishedProductsGrid>
                        {wishedProducts.length === 0 && (
                          <>
                            {session && <p>Vote wishlist est vide</p>}
                            {!session && <p>Connectez-vous pour ajouter des produits à votre wishlist</p>}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
          <div>
            <RevealWrapper delay={100}>
              <WhiteBox>
                <h2>{session ? 'Détails du compte' : 'Connexion'}</h2>
                {loading && <Spinner fullWidth={true} />}
                {!loading && session && (
                  <>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      name="name"
                      onChange={ev => setName(ev.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Email"
                      value={email}
                      name="email"
                      onChange={ev => setEmail(ev.target.value)}
                    />
                    <CityHolder>
                      <Input
                        type="text"
                        placeholder="City"
                        value={city}
                        name="city"
                        onChange={ev => setCity(ev.target.value)}
                      />
                      <Input
                        type="text"
                        placeholder="Postal Code"
                        value={postalCode}
                        name="postalCode"
                        onChange={ev => setPostalCode(ev.target.value)}
                      />
                    </CityHolder>
                    <Input
                      type="text"
                      placeholder="Street Address"
                      value={streetAddress}
                      name="streetAddress"
                      onChange={ev => setStreetAddress(ev.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Country"
                      value={country}
                      name="country"
                      onChange={ev => setCountry(ev.target.value)}/>
                    <Button black block
                            onClick={saveAddress}>
                      Sauvegarder
                    </Button>
                    <hr/>
                  </>
                )}
                {session && (
                  <Button primary onClick={logout}>Déconnexion</Button>
                )}
                {!session && (
                  <Button primary onClick={login}>Connectez-vous avec Google</Button>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
        </ColsWrapper>
      </Center>
    </>
  );
}