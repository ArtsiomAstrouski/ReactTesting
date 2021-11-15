import React, { useRef, useState, useEffect } from 'react'
import styles from './style.module.css'
import Header from '../Header/header'

const scrollToRef = ref => {
	console.log(ref)
	console.log(ref.current.offsetTop)
	window.scrollTo(0, ref.current.offsetTop)
}

const Scrolling = () => {
	const myRef = useRef(null)
	const executeScroll = () => scrollToRef(myRef)
	// Отсечка

	const [scroll, setScroll] = useState(0)

	const handleScroll = () => {
		console.log(window.scrollY)
		setScroll(window.scrollY)
	}

	const handleUpButton = () => {
		window.scrollTo(0, 0)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div>
			<Header />
			<div ref={myRef} className={styles.section}>
				<div className={styles.section__item}>Item 1</div>
				<div className={styles.section__item}>Item 2</div>
				<button onClick={executeScroll}> Click to scroll </button>
				<div className={styles.section__item}>Item 3</div>
				<div className={styles.section__item}>Item 4</div>
				<div className={styles.section__item}>Item 5</div>
				<button onClick={executeScroll}> Click to scroll </button>
				<div className={styles.section__item}>Item 1</div>
				<div className={styles.section__item}>Item 3</div>
				<div className={styles.section__item}>Item 1</div>
				<div className={styles.section__item}>Item 2</div>
				<button onClick={executeScroll}> Click to scroll </button>
			</div>
			<button className={scroll < 300 ? '' : 'show'} onClick={handleUpButton}>
				Go Up
			</button>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
					accusamus ad earum nostrum optio, odit molestias error commodi est
					doloremque alias animi ipsum deleniti iusto praesentium eos deserunt
					ex quas. Ipsum atque facere impedit officia earum ab, reiciendis quia,
					incidunt sapiente asperiores aliquam a alias corporis optio
					repellendus tempore ratione rem perferendis nulla? Quae vitae
					architecto explicabo, sed aliquam beatae? Reprehenderit deleniti
					soluta nisi non facere perferendis voluptatum dicta dolorem corporis,
					neque accusamus culpa consequuntur blanditiis mollitia, ut quas maxime
					aliquid porro expedita ducimus! Ipsam dicta recusandae reiciendis
					iusto reprehenderit. Consequatur veritatis aspernatur nemo eos odit
					magni nihil, ipsa ullam repudiandae voluptates, vel ea, reprehenderit
					accusantium dolores libero velit delectus? Libero autem cupiditate
					neque sed voluptatum deserunt soluta a excepturi? Quaerat sit itaque
					fugit ipsa nemo cumque provident at aperiam ab ipsum! Officiis, optio?
					Vel recusandae labore minus praesentium mollitia esse deleniti ipsam,
					molestiae blanditiis consequatur, quibusdam quam eveniet reiciendis.
					Maiores et non, reiciendis facilis dicta enim, corporis libero eum
					exercitationem optio ducimus dolore aperiam quo illo in vitae suscipit
					quibusdam distinctio molestiae consequuntur fugiat obcaecati. Eaque
					aliquam repellendus deserunt. Consequatur ipsum ex unde obcaecati
					quibusdam officiis in iure maxime dolore dolorum. Voluptatem
					similique, incidunt minima porro reiciendis, ea perspiciatis nam
					provident distinctio error, voluptatum eum cum voluptas ad velit? Ex
					aliquid saepe dignissimos dicta, cumque corrupti et illo explicabo
					nulla nemo adipisci placeat quod impedit tenetur iusto velit magni
					voluptatibus perspiciatis assumenda laboriosam? Illo veritatis dolore
					accusantium quisquam veniam! Rem, ipsum, corporis veniam placeat iusto
					ipsa facilis at aliquid magnam molestiae accusantium, fuga tenetur.
					Inventore libero soluta perspiciatis, nemo, assumenda eaque voluptatem
					eos magni laudantium, pariatur veritatis at aliquid? Ipsa, molestiae
					consectetur doloribus laudantium, voluptas doloremque facere sunt
					nulla quod exercitationem ipsum. Corporis sequi vitae fugit totam eos
					dolore alias. Consequuntur ad quia atque at in, ipsa minus vero?
					Magnam rerum accusamus eos nemo tempore ullam quo numquam impedit quas
					labore, voluptates mollitia quia quibusdam quod asperiores dolorum
					nulla nostrum? Aut magni vitae ut officiis voluptatibus? Sapiente, ad
					explicabo? Facilis distinctio, in quis qui ea porro? Est eos ea
					cupiditate quidem totam. Aliquam eum fugit aut nihil odio, esse ipsa
					delectus ab earum incidunt sint accusantium saepe! Quisquam,
					consequuntur! Autem illo repellendus laborum incidunt delectus non
					nostrum repellat explicabo nesciunt, ex minus commodi ducimus sed
					saepe suscipit cumque odit perferendis. Corrupti aperiam fugiat
					explicabo ratione quia odio eos consequuntur. Culpa delectus, suscipit
					reprehenderit distinctio impedit unde, tempora pariatur accusamus
					harum debitis sequi similique fuga provident temporibus totam est
					tenetur neque repellendus, magnam officiis consectetur rem! Tempora
					dolorem doloribus laboriosam. Expedita quaerat dolorum hic, maxime
					porro, exercitationem facilis labore blanditiis provident,
					necessitatibus eaque incidunt eligendi earum. Incidunt quis iste sunt
					itaque omnis ratione tenetur rem laboriosam, veniam velit eaque
					aperiam. Veritatis minima exercitationem accusantium, ratione earum
					quod sunt natus nostrum rerum nemo tempora suscipit. Quam, non harum.
					Praesentium, sed dolore perferendis quam ipsum, cupiditate repellendus
					possimus inventore, illum voluptatum error! Commodi officia rerum
					nulla ad maxime minima obcaecati, adipisci dolor laboriosam delectus
					deserunt magnam voluptates esse consectetur vitae molestias aperiam
					blanditiis. Nulla repudiandae dolore, dolorum non alias iure soluta
					error! Eaque aspernatur reiciendis ipsam odio non vel harum a
					molestiae alias sint maxime repudiandae consequatur officia provident,
					vitae est? At doloremque minima, dolore pariatur placeat atque soluta
					reiciendis dignissimos deleniti? Expedita corrupti enim, est maiores
					dicta assumenda consequatur magni aperiam tempore perferendis quas?
					Qui praesentium, blanditiis, enim, ullam rerum sit illum odit
					doloribus delectus sequi at pariatur. Non, soluta alias? Voluptatibus
					consequuntur, culpa vero, id incidunt perferendis officia saepe
					accusantium earum, quisquam veritatis aperiam. Fugiat ipsa ratione
					neque nobis dolorem dolor quos? Repudiandae quos possimus veritatis
					eaque repellat assumenda autem. Autem saepe placeat quod. Facilis
					doloremque corporis reprehenderit rem, et cumque, dolore nisi
					provident veniam magni ipsa, quos molestias obcaecati? Laudantium
					necessitatibus impedit illum doloribus, expedita id asperiores nulla
					tenetur! Dolor expedita aliquam cupiditate qui illum nostrum ratione
					exercitationem impedit eaque nisi itaque alias vitae ipsum harum quo,
					sed laudantium sequi temporibus at omnis modi? Deleniti voluptates
					nemo neque temporibus? Laudantium beatae voluptatum, corporis, culpa
					blanditiis exercitationem labore ratione quam obcaecati hic eveniet
					expedita, non porro. Aperiam alias quis neque quos soluta, at eaque
					doloremque harum, praesentium ipsa assumenda. Natus! Dolorum, nisi
					error! Quidem aut voluptate nisi quo, dolorem quam enim repellendus
					inventore sint voluptas facere numquam hic laudantium eius sapiente
					corrupti praesentium vel temporibus eos! Magni nobis sint fugiat!
					Suscipit omnis quis amet eaque porro quae quisquam atque delectus
					veritatis nulla pariatur ex perferendis eveniet eos fuga, vel
					repudiandae incidunt assumenda, ullam quas nesciunt. Fugit recusandae
					pariatur corporis itaque. Ex tenetur numquam corrupti distinctio
					soluta, iste ipsum, velit ratione repellat iusto ullam laudantium
					nemo, beatae doloremque suscipit ab laboriosam aliquam esse omnis
					tempora quos facere. Praesentium molestiae atque ex. Nemo soluta porro
					a similique natus impedit necessitatibus, rerum distinctio fuga unde
					eligendi accusantium ex officia fugiat id dolorem labore placeat
					sapiente modi. Repellat non dicta cumque vero modi ipsa? Molestiae
					fugit magnam vero ducimus a similique? Laboriosam veniam excepturi
					perferendis? Soluta, ad commodi aliquam laudantium eum sequi autem
					laborum odit, ex modi delectus. Architecto esse beatae corrupti illum
					ipsam. Mollitia tempore, odio sed maxime, rem necessitatibus dolorem
					iure eos atque, natus possimus. Sint repudiandae repellendus nulla
					numquam fugiat, neque similique nihil quis quibusdam consequuntur
					inventore facilis, maiores optio. Quae. Nemo dolor reprehenderit
					consectetur odit, voluptatibus atque quam sed commodi eius enim
					facilis nesciunt eaque laborum impedit quibusdam delectus deleniti
					beatae illum possimus ipsum libero consequatur aliquam laboriosam.
					Tempore, at. Nisi eligendi excepturi perferendis ipsum omnis ad,
					nostrum vel voluptatem earum non praesentium optio dolores, placeat
					iste in nam corrupti eos sequi minus. Blanditiis cupiditate, molestias
					corrupti repudiandae maiores officia! Quos laudantium iusto, libero
					nulla ipsa facilis suscipit similique quis omnis iure possimus quas
					consequatur voluptatum delectus? Neque aliquam doloribus voluptatem,
					ad beatae dolore, incidunt, quis ullam cumque alias dolor? Rem,
					necessitatibus. Esse, accusantium rem possimus at quod temporibus.
					Voluptate, cumque. Neque obcaecati omnis itaque, nostrum laborum ex
					rem enim fuga voluptates quas aut nihil voluptate et, veniam dolorum
					sint! Architecto ex magni obcaecati ratione mollitia quas incidunt
					maxime repellat voluptas nisi earum fugit, illo numquam sit natus
					vero, velit eaque quasi excepturi ipsa officia dolore? Officia
					excepturi mollitia reiciendis. Velit obcaecati consequuntur expedita
					fuga commodi sint placeat impedit temporibus. Praesentium accusantium
					aliquid sed nihil, deleniti facilis assumenda ipsam expedita aperiam
					aliquam dolorem, ipsum fugiat soluta illum ex. Iste, dolorem. Ea iste
					est minima sed dolorum consequuntur nostrum repellendus tempore.
					Numquam ducimus voluptates voluptatum in amet doloribus, perferendis
					quisquam eum tenetur molestiae, nulla a, eveniet quia quod debitis
					quidem harum. Doloribus perspiciatis deleniti hic libero ullam,
					maiores reiciendis et aspernatur, quibusdam inventore unde similique
					aut ipsa aperiam suscipit, esse minus eius magni corrupti deserunt
					voluptate nam possimus. Corrupti, nam ut. Accusamus ratione harum
					perspiciatis consequatur, voluptates nostrum illum! Atque, asperiores
					sequi? Libero, numquam ut velit fuga cupiditate iusto ipsa eaque,
					sint, placeat quas dolore maxime rem doloremque sapiente reiciendis
					facere? Voluptatem libero numquam minima quidem quam doloremque illum
					officia corrupti, consectetur expedita at hic a eaque nulla odit
					officiis quo ullam modi maiores suscipit iste tempora animi soluta.
					Dignissimos, facere? Iste et corporis eius. Nesciunt perspiciatis
					dolore molestias consectetur quisquam saepe, aliquam maiores
					voluptatum dignissimos. Alias corrupti, dolor inventore voluptatum
					illum dignissimos sed ipsa nihil eveniet libero quisquam ab molestias!
					Itaque at eaque reiciendis atque, magni, quia quas consequatur nisi in
					impedit quos temporibus nihil perferendis illum voluptate quisquam
					provident. Porro minus, delectus eum ipsam aut amet illum culpa nam!
					Temporibus eum, tenetur accusamus atque autem nobis eaque assumenda
					maxime ducimus molestiae excepturi et, harum repellendus totam, sed a
					quisquam officia at soluta facilis non vitae! Adipisci repudiandae
					asperiores nam. Eligendi, delectus! Suscipit odio vero facilis nemo
					quis iusto eveniet optio quos quae inventore ab, eos in doloribus
					mollitia? Facere consequatur error assumenda, nesciunt culpa ratione
					eaque alias rem unde. Voluptate sapiente ex possimus quibusdam.
					Laborum dolores nulla ipsa corrupti voluptate odio accusantium
					excepturi ea? Suscipit pariatur, magni ut quas a ab modi. Quod magnam
					dolor et quo. Consectetur, quisquam? Perspiciatis, neque ipsa,
					perferendis quod atque cum accusamus cumque consectetur minus, natus
					vero velit cupiditate totam. Autem voluptas recusandae totam fugiat?
					Totam quas soluta fugiat tempore ratione est voluptates natus. Esse,
					ipsum, suscipit quod voluptatibus doloremque delectus dolorum iste
					officia amet minima velit culpa adipisci necessitatibus modi
					praesentium. Porro pariatur quod officiis molestiae, omnis atque
					similique quos deleniti accusantium veniam. Fugiat sed quibusdam
					accusamus, nihil aperiam corrupti fuga minima, unde aspernatur
					voluptate placeat! Praesentium iste dignissimos placeat perspiciatis,
					ex perferendis dolores facere deserunt nemo neque, nihil aspernatur
					magnam officiis suscipit! Quisquam, reiciendis quod incidunt debitis
					necessitatibus suscipit quis earum. Ea, tempora dignissimos! Expedita
					sapiente accusantium vel, ex assumenda et sed iusto recusandae omnis
					suscipit facilis nihil. Rerum repellendus accusantium at! Odio,
					doloribus impedit! Dignissimos dolor veritatis expedita enim, dicta,
					assumenda at, doloribus dolore repellendus et blanditiis autem aut
					optio tempora. Autem beatae non doloremque minus veritatis voluptatem
					odit, eaque ad. Illum modi optio, deleniti aperiam numquam inventore
					explicabo id. Earum numquam vitae facilis quas voluptates maxime unde
					doloribus adipisci commodi totam eos dolore eum, error delectus, a
					beatae enim deleniti. Repellendus, vero perspiciatis dolorem
					voluptatum, sequi perferendis beatae unde temporibus magni molestias,
					reprehenderit deleniti. Tempora quis odio deserunt debitis molestiae
					rerum optio dolor voluptate exercitationem nulla, explicabo maiores
					quo ducimus! Est minima, dolorem, repellendus cumque facere voluptatem
					mollitia eius error quo quos cupiditate vitae expedita non
					perspiciatis maiores illo officia nihil ea assumenda. Minus totam
					esse, labore soluta iste adipisci? Necessitatibus, velit delectus aut
					fugit eligendi sed quisquam minima error, quam sit recusandae dolores
					quasi doloremque tempore, veritatis consequuntur quas! Minima,
					reprehenderit? Ullam nemo laborum officiis harum sunt nam debitis?
					Est, quas deleniti itaque accusantium quam error, ratione vitae, natus
					explicabo minus at ducimus earum delectus ab. Tenetur veniam debitis,
					quisquam quos ab quae obcaecati ipsam repellendus eveniet est
					molestias? Numquam, illum quas. Provident sunt deleniti ipsam. Commodi
					necessitatibus pariatur minima veniam eaque facilis adipisci officiis
					a maxime laborum magni asperiores sapiente corrupti, aperiam voluptas
					autem quaerat? Molestias, inventore fuga.
				</p>
			</div>
		</div>
	)
}
export default Scrolling
