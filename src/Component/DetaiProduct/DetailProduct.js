//import css modules
import cssModules from './DetailProduct.module.css'


import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function DetailProduct() {
  
  return (
    <Container className={cssModules.Container}>
    <Row>
    <Col sm={4} className={cssModules.Col1}>
        <img src='/images/tws.png' alt="" className={cssModules.img}/>
    </Col>
    <Col sm={8} className={cssModules.Col2}>
        <h1 className={cssModules.name}>Earphone TWS</h1>
        <p className={cssModules.p2}>Stock : 132</p>
        <p className={cssModules.p3}>
        Parameter:
        Garansi : 30Days
        Model Produk: R701
        Versi Nirkabel Sejati: V5.1
        Spesifikasi Baterai: earphone 3.7v; kotak pengisian 3.7v
        Mode yang Didukung: HFP/HSP/A2DP/AVRCP
        Sensitivitas: 105dB ± 3dB SPL pada 1 KHz
        Jarak Sinyal: 10m (tanpa hambatan besar)
        Waktu Bermain: sekitar 2.5 jam
        Waktu bicara: sekitar 3 jam
        Waktu siaga: sekitar 4 bulan
        Jenis Baterai: Polimer Litium
        Waktu Pengisian Daya: isi daya kotak pengisian daya -1.5 jam, isi daya headset -1 jam;
        Waktu Pengisian Kotak Pengisian untuk Headset: sekitar 3 kali
        Berat Produk: 32.5g
        Ukuran Paket: 172x77x24mm
        Berat Paket: 55g
        Isi Kemasan: 1 x kotak pengisi daya, 1 pasang earbud, 3 pasang tutup silikon, 1 x panduan pengguna, 1 x kabel pengisi daya
        </p>
        <h3 className={cssModules.h3}>Rp 399.000</h3>
        <Button className={cssModules.btn} variant="danger" type="submit">
            Buy
        </Button>
    </Col>
    </Row>
    </Container>
  )
}

export default DetailProduct