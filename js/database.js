var biglietti = [
{ nome: 'NuovoMaxiMiliardario', lotto: 60000000, costo: 20, tipi_di_vincita: '5000000 8-100000 8-50000 88-10000 760-1000 63000-500 310000-200 550000-100 1200000-50 4000000-20 16000000' },
{ nome: 'Fantastici1000', lotto: 6240000, costo: 20, tipi_di_vincita: '1000 24960-500 24960-100 104000-60 49920-40 416000-20 1664000' },
{ nome: 'E500MilioniSuperCash', lotto: 31680000, costo: 20, tipi_di_vincita: '7000000 2-1000000 4-50000 50-10000 528-1000 19668-500 110088-200 258720-100 929280-50 971520-40 1309440-25 3484800-20 3484800' },
{ nome: 'VegasCasino', lotto: 40320000, costo: 10, tipi_di_vincita: '2000000 4-30000 160-10000 168-1000 8400-500 36960-200 157584-100 487200-50 201600-25 4435200-15 201600-10 6921600' },
{ nome: 'OroEDiamanti', lotto: 36000000, costo: 10, tipi_di_vincita: '2000000 6-50000 30-10000 240-1000 12300-500 33000-250 18000-100 540000-50 360000-20 4920000-10 5880000' },
{ nome: 'MilionEuro', lotto: 15840000, costo: 10, tipi_di_vincita: '2000000 3-10000 132-1000 1320-500 7920-200 13200-150 33000-100 85800-60 147840-50 178200-30 660000-20 693000-15 1056000-10 2587200' },
{ nome: 'NuovoMegaMiliardario', lotto: 78000000, costo: 10, tipi_di_vincita: '2000000 10-20000 90-10000 420-1000 19500-500 68250-200 520000-100 487500-50 910000-25 10-20 9620000-10 13000000' },
{ nome: 'MegaDoppiaSfida', lotto: 40800000, costo: 10, tipi_di_vincita: '2000000 5-50000 40-20000 80-1000 5780-500 39100-250 8500-150 450500-100 204000-50 408000-25 3264000-20 952000-10 6392000' },
{ nome: 'BottaDiFortuna', lotto: 4080000, costo: 10, tipi_di_vincita: '3000000 1-1000 170-300 30090-100 51000-30 136000-20 244800-10 510000' },
{ nome: '50X', lotto: 24000000, costo: 10, tipi_di_vincita: '2000000 2-100000 6-40000 8-20000 12-10000 72-5000 156-2000 206-1000 860-500 74000-200 93500-100 240000-50 432000-20 1680000-10 4000000' },
{ nome: 'SoldiCash500', lotto: 21120000, costo: 10, tipi_di_vincita: '500 140800-50 246400-30 281600-20 1126400-15 1548800-10 2323200' },
{ nome: 'ITesoriDelPascia', lotto: 20160000, costo: 10, tipi_di_vincita: '2000000 3-10000 159-1000 4032-500 8400-150 179760-100 84000-50 159600-25 1411200-15 1545600-10 3360000' },
{ nome: 'MegaTuristaPerSempre', lotto: 34560000, costo: 10, tipi_di_vincita: '3248837 12-100000 12-10000 18-5000 72-1000 2304-500 12960-200 38880-100 207360-50 576000-20 4377600-10 6336000' },
{ nome: 'nuovoturistapersempre', lotto: 54720000, costo: 5, tipi_di_vincita: '1756340 12-50000 24-10000 96-5000 204-1000 2736-500 7980-200 63840-100 125400-50 374832-20 1185600-15 1185600-10 4560000-5 7296000' },
{ nome: 'turistapersempre', lotto: 100800000, costo: 5, tipi_di_vincita: '1450000 35-50000 35-10000 210-5000 420-1000 8400-500 16800-200 117600-100 231000-50 420000-20 1785000-15 2520000-10 8400000-5 13440000' },
{ nome: 'nuovomiliardario', lotto: 142560000, costo: 5, tipi_di_vincita: '500000 27-100000 54-10000 432-1000 23760-500 65340-100 781110-50 935550-25 594000-20 3564000-15 1782000-10 10098000-5 19008000' },
{ nome: 'doppiasfida', lotto: 64800000, costo: 5, tipi_di_vincita: '500000 10-10000 230-1000 18900-500 10800-100 324000-50 216000-25 1512000-20 1080000-10 5508000-5 8532000' },
{ nome: 'seratavip', lotto: 22080000, costo: 5, tipi_di_vincita: '500000 2-5000 76-1000 460-500 1472-150 4600-100 27600-75 198720-50 184000-30 92000-25 276000-20 368000-15 184000-10 1656000-5 2484000' },
{ nome: 'texascasino', lotto: 46080000, costo: 5, tipi_di_vincita: '500000 8-10000 192-1000 5760-500 15360-150 201600-50 301440-25 768000-15 921600-10 3686400-5 5990400' },
{ nome: 'oroerubini', lotto: 43200000, costo: 5, tipi_di_vincita: '500000 9-10000 126-1000 1800-500 9000-250 108000-100 108000-50 252000-25 180000-15 1728000-10 3024000-5 6192000' },
{ nome: '10oanniversario', lotto: 54720000, costo: 5, tipi_di_vincita: '500000 6-10000 24-1000 1404-500 15960-100 296400-50 1231000-10 5107200-5 8025600' },
{ nome: 'auguridinatale', lotto: 27600000, costo: 5, tipi_di_vincita: '500000 4-10000 80-1000 1035-500 2070-100 10350-50 108100-25 386400-20 644000-15 1012000-10 2760000-5 4278000' },
{ nome: 'RoyalBlack', lotto: 39600000, costo: 5, tipi_di_vincita: '500000 3-50000 3-5000 150-1000 495-500 1980-250 4950-150 11550-100 363000-50 396000-30 369600-20 541200-10 3696000-5 3762000' },
{ nome: 'battaglianavale', lotto: 60000000, costo: 5, tipi_di_vincita: '500000 5-1000 200-100 75000-50 500000-30 500000-25 800000-20 1500000-15 1500000-10 4100000-5 9600000' },
{ nome: 'supersettimana1500e', lotto: 34560000, costo: 5, tipi_di_vincita: '1517351 12-10000 192-1000 1440-500 2880-100 21600-50 374400-20 864000-10 3168000-5 5760000' },
{ nome: '20x', lotto: 50400000, costo: 5, tipi_di_vincita: '500000 4-10000 148-2000 500-1000 2100-500 8400-200 21000-100 184800-50 462000-30 672000-25 756000-15 588000-10 4956000-5 4586400' },
{ nome: 'miliardario', lotto: 100800000, costo: 5, tipi_di_vincita: '500000 20-100000 68-10000 2100-1000 16800-500 50400-100 336000-50 436800-25 840000-20 1680000-15 1680000-10 7392000-5 12768000' },
{ nome: 'arribalafortuna', lotto: 50400000, costo: 5, tipi_di_vincita: '500000 7-5000 420-500 11340-150 79800-100 88200-50 508200-20 1260000-15 1428000-10 3444000-5 7560000' },
{ nome: 'vivalestate', lotto: 26400000, costo: 5, tipi_di_vincita: '500000 4-10000 186-1000 1100-500 3300-250 4400-100 44000-50 121000-30 660000-20 88000-15 880000-10 1980000-5 3872000' },
{ nome: 'cruciverba', lotto: 30000000, costo: 5, tipi_di_vincita: '500000 5-1000 20-100 6250-60 162500-40 750000-20 650000-10 2350000-5 4950000' },
{ nome: 'pazziperloshopping', lotto: 42000000, costo: 3, tipi_di_vincita: '292268 40-1000 10-100 143500-50 1750-10 2100000-5 4032000-3 6552000' },
{ nome: 'nataleinfamiglia', lotto: 37440000, costo: 3, tipi_di_vincita: '200000 3-1000 10-500 624-100 1560-50 59280-25 1029600-15 187200-10 1216800-5 2995200-3 5803200' },
{ nome: 'leredita', lotto: 30000000, costo: 3, tipi_di_vincita: '200000 4-20000 20-1000 625-500 1250-250 2500-200 3750-100 9375-50 62500-25 100000-20 125000-15 506125-10 1350000-5 2925000-3 4200000' },
{ nome: 'buoncompleanno', lotto: 36000000, costo: 3, tipi_di_vincita: '370000 10-20000 10-1000 600-500 1500-100 15000-50 63000-15 900000-10 1728000-5 3420000-3 5220000' },
{ nome: 'supersetteemezzo', lotto: 48000000, costo: 3, tipi_di_vincita: '200000 8-70000 8-7000 80-700 600-300 12000-100 800-70 280000-30 480000-10 144000-7 5184000-3 6336000' },
{ nome: 'superportafortuna', lotto: 36000000, costo: 3, tipi_di_vincita: '200000 6-10000 36-400 1500-200 1500-100 12000-40 225000-15 1188000-10 1008000-5 3348000-3 5256000' },
{ nome: 'oroscopofortunato', lotto: 36000000, costo: 3, tipi_di_vincita: '200000 6-20000 12-1000 300-500 1200-200 2700-100 11700-50 105000-20 756000-10 1530000-5 3600000-3 5112000' },
{ nome: 'goalmondialebrasile', lotto: 26880000, costo: 3, tipi_di_vincita: '200000 4-20000 4-1000 448-500 896-250 112-100 4480-50 44800-25 456960-20 107520-10 1236480-5 2526720-3 3816960' },
{ nome: 'puntataalcasino', lotto: 27840000, costo: 3, tipi_di_vincita: '200000 4-10000 8-1000 232-500 1160-100 2320-50 75400-25 306240-15 835200-10 835200-5 2310720-3 3507840' },
{ nome: 'assopigliatutto', lotto: 33600000, costo: 3, tipi_di_vincita: '200000 4-10000 24-1000 700-500 1400-200 1960-100 14000-30 196000-20 854000-10 1512000-5 2688000-3 3864000' },
{ nome: 'grattaquiz', lotto: 50400000, costo: 3, tipi_di_vincita: '200000 3-50000 12-10000 42-1000 840-500 2100-250 6300-100 56700-50 73500-25 126000-20 504000-15 756000-10 2016000-5 4158000-3 6930000' },
{ nome: 'supersettimana500', lotto: 34560000, costo: 2, tipi_di_vincita: '505819 18-1000 198-500 1152-100 6192-50 12096-25 138240-10 599040-5 2304000-2 6451200' },
{ nome: 'bowling', lotto: 30240000, costo: 2, tipi_di_vincita: '100000 6-10000 24-1000 300-500 1200-200 2490-100 46620-50 83790-20 201600-10 463806-5 2016000-2 4737600' },
{ nome: 'turistaper10anni', lotto: 40320000, costo: 2, tipi_di_vincita: '156302 24-1000 336-500 336-100 3024-50 87696-10 1639680-5 2607360-2 6988800' },
{ nome: 'nuovoturistaper10anni', lotto: 48960000, costo: 2, tipi_di_vincita: '254884 12-1000 408-500 408-100 4284-50 112200-10 2350080-5 2937600-2 7833600' },
{ nome: 'misentofortunato', lotto: 38400000, costo: 2, tipi_di_vincita: '100000 8-50000 16-20000 32-10000 32-500 480-100 14400-50 139200-20 168000-10 768000-5 2816000-2 6656000' },
{ nome: 'quadrifogliodoro', lotto: 20160000, costo: 2, tipi_di_vincita: '100000 4-10000 16-1000 160-500 800-200 1600-100 21000-50 42000-20 148176-10 383040-5 1478400-2 3091200' },
{ nome: 'mappadeipirati', lotto: 21600000, costo: 3, tipi_di_vincita: '200000 3-10000 6-1000 180-500 630-100 1800-50 26640-30 27000-20 216000-15 432000-10 993600-5 1771200-3 2808000' },
{ nome: 'magicroulette', lotto: 48000000, costo: 2, tipi_di_vincita: '100000 10-1000 200-500 1200-200 2100-100 59200-50 62000-20 400000-10 1200000-5 3200000-2 7040000' },
{ nome: 'cruciverbadoro', lotto: 36000000, costo: 3, tipi_di_vincita: '200000 18-20000 90-10000 180-2000 540-500 1620-250 3240-100 23400-50 135000-20 540000-10 1080000-5 3060000-3 4320000' },
{ nome: 'nuovofaiscopa', lotto: 19200000, costo: 2, tipi_di_vincita: '100000 4-1000 266-500 533-250 1067-100 28000-50 52000-20 128000-10 288000-5 1280000-2 3008000' },
{ nome: 'soldisoldi', lotto: 37440000, costo: 2, tipi_di_vincita: '100000 3-10000 6-1000 99-500 198-200 999-100 3120-50 15600-30 299520-15 299520-10 748800-5 3369600-2 3931200' },
{ nome: 'doppiofai7', lotto: 42240000, costo: 2, tipi_di_vincita: '100000 4-7000 80-700 320-70 17600-40 92928-20 450560-10 704000-7 2252800-3 2534400-2 402688' },
{ nome: 'nuovobattiilbanco', lotto: 16800000, costo: 2, tipi_di_vincita: '100000 7-1000 630-250 2450-100 28000-20 84000-15 224000-7 560000-3 1204000-2 1764000' },
{ nome: 'nuovodadomatto', lotto: 16800000, costo: 2, tipi_di_vincita: '100000 7-1100 70-700 280-110 3500-70 7000-40 64050-20 168000-11 224000-7 448000-3 1288000-2 1792000' },
{ nome: '2015', lotto: 10080000, costo: 1, tipi_di_vincita: '10000 14-500 42-100 252-50 420-10 178080-5 275520-2 772800-1 1260000' },
{ nome: 'supersettimana200', lotto: 50400000, costo: 1, tipi_di_vincita: '202381 30-1000 210-100 4200-40 10500-10 42000-5 772800-4 1176000-2 2688000-1 8736000' },
{ nome: 'portafortuna', lotto: 51600000, costo: 1, tipi_di_vincita: '10000 17-500 430-100 1290-40 10750-20 64500-10 688000-5 1376000-2 3440000-1 7568000' },
{ nome: 'Fai7', lotto: 38400000, costo: 1, tipi_di_vincita: '7000 52-700 160-70 2560-40 70400-20 128000-10 192000-7 512000-2 2304000-1 4608000' },
{ nome: 'setteemezzo', lotto: 58080000, costo: 1, tipi_di_vincita: '7000 78-700 242-70 3872-40 105996-20 193600-10 290400-7 774400-2 3484800-1 6969600' },
]

function parse_vincita (tipi_di_vincita) {
	var a = tipi_di_vincita.split('-');
	a.forEach(function (singolo, i, a) {
		a[i] = singolo.split(' ');
	})
	return a
}

biglietti.forEach(function (biglietto, i, a) {
  biglietto.tipi_di_vincita = parse_vincita(biglietto.tipi_di_vincita);
});