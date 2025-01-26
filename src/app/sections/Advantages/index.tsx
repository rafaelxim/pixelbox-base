import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <Content>
        <div className={styles.advantages__row}>
          <div className={styles.advantages__heading}>
            <p data-aos="fade-up" className={styles.advantages__preTitle}>
              Não somos uma empresa de
            </p>
            <Title>criação de sites comum</Title>

            <div className={styles.advantages__listGroup}>
              <h2 data-aos="fade-up" className={styles.advantages__subtitle}>
                Os diferenciais que fizeram nossa empresa de 10 anos ser um
                grande sucesso são:
              </h2>
              <div className={styles.advantages__list}>
                <div data-aos="fade-up" className={styles.advantages__item}>
                  <span>√</span> Atendimento próximo e humanizado
                </div>
                <div data-aos="fade-up" className={styles.advantages__item}>
                  <span>√</span> Conhecimento profundo sobre cada cliente
                </div>
                <div data-aos="fade-up" className={styles.advantages__item}>
                  <span>√</span> Método exclusivo e comprovado
                </div>
                <div data-aos="fade-up" className={styles.advantages__item}>
                  <span>√</span> Especialistas em desenvolvimento
                </div>
              </div>
            </div>

            <div className={styles.advantages__listGroup}>
              <h2 data-aos="fade-up" className={styles.advantages__subtitle}>
                Quem nos contrata afirma que vale a pena porque isso
                proporciona:
              </h2>
              <div className={styles.advantages__list}>
                <div data-aos="fade-up" className={styles.advantages__item}>
                  <span>√</span> Resultados superiores
                </div>
                <div data-aos="fade-up" className={styles.advantages__item}>
                  <span>√</span> Suporte de uma equipe parceira e sempre
                  disponível
                </div>
              </div>
            </div>

            <Button>Solicite um orçamento</Button>
          </div>
          <div data-aos="fade-up" className={styles.advantages__pics}>
            <Image src="/images/team.png" alt="time de ti" fill />
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Advantages;
