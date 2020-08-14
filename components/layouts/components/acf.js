import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '../../../utils';

/* ACF Options */
const fetchAcfOptions = async () => {
  const res = await api.get(`/acf/v3/options/options`);
  const acfOpts = res.data;
  return acfOpts || {};
}

export const Logo = () => {
  const [logo, setLogo] = useState('');

  const getAcfOptions = async () => {
    try {
      const theOpts = await fetchAcfOptions();
      const theLogo = theOpts.acf.opts_header.logo.url;
      setLogo(theLogo);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    let isCancelled = false;
    getAcfOptions();
    return () => {
      isCancelled = true;
    }
  }, [logo])
  return (
    <div className="logo">
      <Link href="/home">
        <a><img src={ logo } alt="" /></a>
      </Link>

      <style jsx>{`
        img {
          display: block;
          width: 100%;
        }
      `}</style>
    </div>
  )
}


